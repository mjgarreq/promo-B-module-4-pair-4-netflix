const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

server.get("/movies", (req, res)=>{
  const fakeMovies = [
    {
      id: 1,
      title: "Wonder Woman",
      genre: "Action",
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/12/gal-gadot-como-wonder-woman-universo-extendido-dc-2895594.jpg?tf=3840x",
      category: "Superhero",
      year: 2017,
      director: "Patty Jenkins",
    },
    {
      id: 2,
      title: "Inception",
      genre: "Science Fiction",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
      category: "Thriller",
      year: 2010,
      director: "Christopher Nolan",
    },
  ];
  res.status(200).json({
      success: true,
      movies:  fakeMovies
   })
})

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


/*
ENDPOINTS:

  1. GET --> API movies (pintar un listado de películas que nos devuelva el servidor, con las variables de estado de los filtros).
  2. GET --> API user (revisar si el usuario introducido existe o no).
  3. GET --> API user para conseguir las películas favoritas de la usuaria
  4. POST --> API user enviar datos del registro (email y contraseña) al servidor.
  5. POST --> API user enviar datos de la usuaria (cuando ya está registrada y entra, mandamos a la API id_usuario, nombre, contraseña, email)
  6. DELETE --> router (al cerrar sesion, limpiar todos los datos del LS y refrescar página)

*/
