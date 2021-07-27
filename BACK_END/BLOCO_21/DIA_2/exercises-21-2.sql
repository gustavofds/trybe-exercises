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