create database taskdb; 
use taskdb;

CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `task_description` text NOT NULL,
  `due_date` date NOT NULL,
  PRIMARY KEY (`id`)
);

select *from taskdb.tasks;