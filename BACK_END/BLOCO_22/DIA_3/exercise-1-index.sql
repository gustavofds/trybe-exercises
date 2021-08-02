CREATE FULLTEXT INDEX category_name
ON sakila.category (name);

SELECT * FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- Query cost: 0.35 (Fulltext index Search)

DROP INDEX category_name ON sakila.category;

SELECT * FROM sakila.category
WHERE name LIKE '%action%';
-- Query cost: 1.85 (Full Table Scan)