CREATE VIEW film_info AS
SELECT FA.actor_id,
CONCAT(A.first_name, ' ', A.last_name) AS `actor`,
F.title
FROM sakila.film_actor AS FA
INNER JOIN sakila.actor as A
ON FA.actor_id=A.actor_id
INNER JOIN sakila.film AS F
ON FA.film_id=F.film_id
ORDER BY actor;
