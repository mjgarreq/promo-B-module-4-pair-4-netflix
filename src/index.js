const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

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
    const connection = await connectDB();
    const sqlSelect = "SELECT * FROM movies";
    const [result] = await connection.query(sqlSelect);
    connection.end();

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
})

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const urlServerStatic = './src/public-react'; //vamos a buscar desde la carpeta raiz
server.use(express.static(urlServerStatic));

/*
ENDPOINTS:

  1. GET --> API movies (pintar un listado de películas que nos devuelva el servidor, con las variables de estado de los filtros).
  2. GET --> API user (revisar si el usuario introducido existe o no).
  3. GET --> API user para conseguir las películas favoritas de la usuaria
  4. POST --> API user enviar datos del registro (email y contraseña) al servidor.
  5. POST --> API user enviar datos de la usuaria (cuando ya está registrada y entra, mandamos a la API id_usuario, nombre, contraseña, email)
  6. DELETE --> router (al cerrar sesion, limpiar todos los datos del LS y refrescar página)

*/
