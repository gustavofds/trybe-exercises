USE sakila;
CREATE VIEW film_with_categories AS
SELECT F.title,
FC.category_id,
C.name
FROM sakila.film_category AS FC
INNER JOIN sakila.film AS F
ON FC.film_id=F.film_id
INNER JOIN sakila.category AS C
ON FC.category_id=C.category_id
ORDER BY F.title;
