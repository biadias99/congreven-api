CREATE DEFINER=`root`@`localhost` TRIGGER `congreven`.`activities_BEFORE_DELETE` BEFORE DELETE ON `activities` FOR EACH ROW
BEGIN
DELETE FROM speaks WHERE activity_id = OLD.id;
END