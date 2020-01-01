create  database burgers_db;

use burgers_db;

CREATE TABLE burgers (
  id int(11) NOT NULL AUTO_INCREMENT,
  burger_name varchar(45) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (`id`)
);