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

DELIMITER $$
CREATE TRIGGER set_new_movie_log
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', CURRENT_DATE());
END $$
DELIMITER ;

-- 2
DELIMITER $$
CREATE TRIGGER set_trigger_price_update
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;

-- 3
DELIMITER $$
CREATE TRIGGER set_delete_log
	AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (OLD.movie_id, 'DELETE', CURRENT_DATE());
END $$
DELIMITER ;