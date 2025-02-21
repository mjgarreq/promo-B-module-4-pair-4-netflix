const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

async function connectDB() {
  const conex = await mysql.createConnection({
    //para conectarnos a la BD necesitamos un objeto de conexión
    host: 'sql.freedb.tech',
    database: 'freedb_pair_netflix',
    user: 'freedb_adminAinara',
    password: '$FJfPMfQ8mxGG8@',
  })
  conex.connect();
  return conex;
}

server.get("/movies", async (req, res)=>{
  try {
    const { genre, sort } = req.query;
    const connection = await connectDB();
    const sqlSelect = "SELECT * FROM movies";
    const ordenamiento = sort ? `ORDER BY ${sort} ASC` : "";
    const sqlSelectGenre = `SELECT * FROM movies WHERE genre = ? ${ordenamiento}`;
    const [result] = await connection.query(sqlSelectGenre, [genre]);
    connection.end();
    console.log(req.query);
    if(result.length === 0) {
      res.status(404).json({
        success:false,
        movies: "No se encontraron películas",
      });
    } else {
      res.status(200).json({
        success: true,
        movies:  result
     })
    }
  } catch (error) {
    res.status(500).json({
      status:"error",
      message: error,
    });
  }
});

server.get('/movie/:movieId', async (req, res) => {
  const {movieId} = req.params;
  console.log(movieId);
  const connection = await connectDB();
  const foundMovie = "SELECT * FROM movies WHERE idMovies = ?";
  const [result] = await connection.query(foundMovie, [movieId]);
  console.log(result)
  connection.end();
  res.render('movie', {movie: result[0]})
  
});

server.post('/sign-up', async (req, res)=>{
  const connection = await connectDB();
  const {email, pass} = req.body;
  const selectEmail = 'SELECT email FROM Users WHERE email = ?';
  const [emailResult] = await connection.query(selectEmail, [email]);
  if(emailResult.length === 0){
      const passwordHashed = await bcrypt.hash(pass, 10);
      const insertUser = 'INSERT INTO Users (email, password) VALUES (?,?)';
      const [result] = await connection.query(insertUser, [email, passwordHashed]);
      res.status(201).json({ success:true, userId: result.insertId })
  }else{
    res.status(200).json({ success:false, message: 'Usuario ya existe' })
  }
});

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const urlServerStatic = './src/public-react'; //vamos a buscar desde la carpeta raiz
server.use(express.static(urlServerStatic));

const urlServerStaticImages = './src/public-movies-images'; 
server.use(express.static(urlServerStaticImages));

server.use(express.static("./css"))

/*
ENDPOINTS:

  1. GET --> API movies (pintar un listado de películas que nos devuelva el servidor, con las variables de estado de los filtros).
  2. GET --> API user (revisar si el usuario introducido existe o no).
  3. GET --> API user para conseguir las películas favoritas de la usuaria
  4. POST --> API user enviar datos del registro (email y contraseña) al servidor.
  5. POST --> API user enviar datos de la usuaria (cuando ya está registrada y entra, mandamos a la API id_usuario, nombre, contraseña, email)
  6. DELETE --> router (al cerrar sesion, limpiar todos los datos del LS y refrescar página)

*/
