// login

const sendLoginToApi = (data) => {
  console.log("Se están enviando datos al login:", data);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "//localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(data),
    }
  )
  .then(response => response.json())
  .then(data => {
     return data;
  });
};

// signup

const sendSignUpToApi = (data) => {
  console.log("Se están enviando datos al signup:", data);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch('//localhost:4000/sign-up', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
       "Content-Type":"application/json",
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return data;
    });

};

// profile

const sendProfileToApi = (userId, data) => {
  console.log("Se están enviando datos al profile:", userId, data);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "//localhost:4000/user/profile", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type":"application/json",
        userId: userId,
      },
    }
  )
  .then(response => response.json())
  .then(data => {
   return data;
});
};

const getProfileFromApi = (userId) => {
  console.log("Se están pidiendo datos del profile del usuario:", userId);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "//localhost:4000/user/profile", {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        userId: userId,
      },
      
    }
  )
  .then(response => response.json())
  .then(data => {
     return data;
  });
};

// user movies

const getUserMoviesFromApi = (userId) => {
  console.log(
    "Se están pidiendo datos de las películas de la usuaria:",
    userId
  );
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(
    "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
  )
    .then((response) => response.json())
    .then(() => {
      // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return {
        success: true,
        movies: [
          {
            id: 1,
            title: "Gambita de dama",
            genre: "Drama",
            image:
              "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg",
          },
        ],
      };
    });
};

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSignUpToApi: sendSignUpToApi,
  sendProfileToApi: sendProfileToApi,
  getProfileFromApi: getProfileFromApi,
  getUserMoviesFromApi: getUserMoviesFromApi,
};

export default objToExport;
