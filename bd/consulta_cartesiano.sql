CREATE TABLE users_movies (
	id_users_movies INT auto_increment primary key not null,
    fk_users INT,
    fk_movies INT,
    FOREIGN KEY (fk_users) REFERENCES freedb_pair_netflix.Users (idUser),
    FOREIGN KEY (fk_movies) REFERENCES freedb_pair_netflix.movies (idMovies)
);

INSERT INTO freedb_pair_netflix.users_movies (fk_users, fk_movies)
VALUES (1, 2),
(1, 1),
(3, 2);

CREATE TABLE actors_movies (
	id_actors_movies INT auto_increment primary key not null,
    fk_actors INT,
    fk_movies INT,
    FOREIGN KEY (fk_actors) REFERENCES freedb_pair_netflix.Actors (idActor),
    FOREIGN KEY (fk_movies) REFERENCES freedb_pair_netflix.movies (idMovies)
);

INSERT INTO freedb_pair_netflix.actors_movies (fk_actors, fk_movies)
VALUES (1, 3),
(2, 2),
(3, 1);

SELECT Actors.name as Actor, movies.title as Pelicula
FROM freedb_pair_netflix.Actors, freedb_pair_netflix.movies, freedb_pair_netflix.actors_movies
WHERE Actors.idActor = actors_movies.fk_actors AND movies.idMovies = actors_movies.fk_movies;
