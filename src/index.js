const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

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
