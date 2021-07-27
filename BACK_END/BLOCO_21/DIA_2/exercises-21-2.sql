-- 1
SELECT M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON BO.movie_id = M.id;