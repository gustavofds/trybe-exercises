-- 1
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER set_current_year
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(CURRENT_DATE());
END $$
DELIMITER ;

DROP TRIGGER IF EXISTS set_new_movie_log;

DELIMITER $$
CREATE TRIGGER set_new_movie_log
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', CURRENT_DATE());
END $$
DELIMITER ;