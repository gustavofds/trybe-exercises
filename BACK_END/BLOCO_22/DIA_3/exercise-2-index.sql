CREATE INDEX address_postalcode
ON sakila.address (postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost: 0.95 (Non-Unique Key Lookup)
-- Query cost: 65.40 (Full Table Scan) = After dropping index

DROP INDEX address_postalcode ON sakila.address;