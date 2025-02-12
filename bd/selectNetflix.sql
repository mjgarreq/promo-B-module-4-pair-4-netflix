
SELECT * FROM freedb_pair_netflix.movies;
SELECT title, genre FROM freedb_pair_netflix.movies WHERE year>1990;
SELECT * FROM freedb_pair_netflix.movies WHERE category="Top 10";
UPDATE freedb_pair_netflix.movies SET year=1997 WHERE title="La vita è bella";

SELECT * FROM freedb_pair_netflix.Actors;
SELECT * FROM freedb_pair_netflix.Actors WHERE birthday BETWEEN "1950-01-01" AND "1960-12-31";
SELECT name, lastname FROM freedb_pair_netflix.Actors WHERE country="Estados unidos";

SELECT * FROM freedb_pair_netflix.Users WHERE plan_details="Standard";
DELETE FROM freedb_pair_netflix.Users WHERE user LIKE "m%";
SELECT * FROM freedb_pair_netflix.Users;

ALTER TABLE freedb_pair_netflix.Actors ADD image TEXT;
