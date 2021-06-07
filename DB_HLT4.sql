CREATE DATABASE charity_organisation;
USE charity_organisation;

CREATE TABLE volunteers(
	mid INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) ,
    contact_number INT,
    PRIMARY KEY(mid)
);

INSERT INTO volunteers(firstname,lastname,email,contact_number)
VALUES ('Nick','Nitro','loyal2chip@celite.net',555555555);
INSERT INTO volunteers(firstname,lastname,email,contact_number)
VALUES ('Joe','Bloggs',null,54321);
INSERT INTO volunteers(firstname,lastname,email,contact_number)
VALUES ('Mohammad','Ali','ropeadope@legends.com',0121),
('Sally','Ohms',null,0777123456),
('Jane','Doe','mailjane@protonmail.com',null);



SELECT * FROM volunteers;
SELECT count(mid) FROM volunteers;





    
    
	







