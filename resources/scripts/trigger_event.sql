CREATE DEFINER=`root`@`localhost` TRIGGER `congreven`.`events_BEFORE_DELETE` BEFORE DELETE ON `events` FOR EACH ROW
BEGIN
DELETE FROM subscribes WHERE event_id = OLD.id;
DELETE FROM supports WHERE event_id = OLD.id;
DELETE FROM news WHERE event_id = OLD.id;
DELETE FROM activities WHERE event_id = OLD.id;
END