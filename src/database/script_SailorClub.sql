CREATE DATABASE SailorClub;
USE SailorClub;

CREATE TABLE usuarios (
idUsuario int primary key auto_increment,
nome varchar (45),
usuario varchar (45),
nascimento date, 
email varchar (80),
celular char (11),
senha char (12)
);

INSERT INTO usuarios values 
(null, "Bruna", "bruterino", "1999-05-17", "brunaterino@gmail.com", "11958707708", "1234"),
(null, "Lucas", "luscalves", "1999-05-31", "lusca@gmail.com", "11958765489", "9874");

CREATE TABLE quiz (
idQuiz int primary key auto_increment, 
dtHora datetime default current_timestamp,
ptsSailorMoon int,
ptsSailorMercury int,
ptsSailorMars int,
ptsSailorJupiter int,
ptsSailorVenus int,
fkUsuario int,
foreign key (fkUsuario) references usuarios (idUsuario)
);

ALTER TABLE quiz auto_increment = 100;

INSERT INTO quiz values 
(null, current_timestamp(), 1, 2, 0, 1, 1),
(null, current_timestamp(), 3, 0, 2, 0, 0);

CREATE TABLE forum (
	idForum int primary key auto_increment,
	titulo varchar(100),
    descricao varchar(150),
	fkUsuario int,
	foreign key (fkUsuario) references usuarios (idUsuario)
); 

select * from quiz;


