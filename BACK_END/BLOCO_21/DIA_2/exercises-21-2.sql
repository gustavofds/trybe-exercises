-- 1
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON BO.movie_id = M.id;

-- 2
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON BO.movie_id = M.id
WHERE BO.international_sales > BO.domestic_sales;

-- 3
SELECT M.title, BO.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON BO.movie_id = M.id
ORDER BY BO.rating DESC;

-- 4
SELECT T.*, M.*
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON M.theater_id = T.id
ORDER BY T.name;

-- 5
SELECT T.*, M.*
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON M.theater_id = T.id
ORDER BY T.name;

-- 6
SELECT title FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id FROM Pixar.BoxOffice
    WHERE rating > 7.5
);

SELECT M.title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON BO.movie_id = M.id
WHERE BO.rating > 7.5;

-- 7
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id FROM Pixar.Movies
    WHERE `year` > 2009
);

SELECT BO.rating
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = BO.movie_id
WHERE M.year > 2009;