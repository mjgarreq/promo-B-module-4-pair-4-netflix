SELECT Users.name AS Usuario, COUNT(*) AS Peliculas_favoritas
FROM freedb_pair_netflix.Users INNER JOIN freedb_pair_netflix.users_movies ON Users.idUser = users_movies.fk_users
INNER JOIN freedb_pair_netflix.movies ON movies.idMovies = users_movies.fk_movies
GROUP BY fk_users;

SELECT Users.name AS Usuario, COUNT(users_movies.fk_movies) AS Peliculas_favoritas
FROM Users INNER JOIN users_movies ON Users.idUser = users_movies.fk_users
INNER JOIN movies ON movies.idMovies = users_movies.fk_movies
GROUP BY fk_users
ORDER BY Peliculas_favoritas DESC
LIMIT 1;
