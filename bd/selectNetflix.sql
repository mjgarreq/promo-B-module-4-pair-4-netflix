SELECT * FROM movies;
SELECT title, genre FROM movies WHERE year>1990;
SELECT * FROM movies WHERE category="Top 10";
UPDATE movies SET year=1997 WHERE title="La vita è bella";

SELECT * FROM actors;
SELECT * FROM actors WHERE birthday BETWEEN "1950-01-01" AND "1960-12-31";
SELECT name, lastname FROM actors WHERE country="Estados unidos";

SELECT * FROM users WHERE plan_details="Standard";
DELETE FROM users WHERE user LIKE "m%";
SELECT * FROM users;

ALTER TABLE actors ADD image TEXT;