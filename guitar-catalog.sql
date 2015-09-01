CREATE TABLE catalog ( 
	id int(8) NOT NULL auto_increment,
	name varchar(255) default NULL,
	year date default NULL,
	brand varchar(255) default NULL,
	PRIMARY KEY (id)
) AUTO_INCREMENT=1;