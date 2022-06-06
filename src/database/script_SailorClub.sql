CREATE DATABASE SailorClub;
USE SailorClub;

CREATE TABLE usuarios (
idUsuario int primary key auto_increment,
nome varchar (45),
usuario varchar (45),
nascimento date, 
email varchar (80),
celular char (11),
senha varchar (12)
);

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

CREATE TABLE forum (
	idForum int primary key auto_increment,
	titulo varchar(100),
    descricao varchar(150),
	fkUsuario int,
	foreign key (fkUsuario) references usuarios (idUsuario)
); 

select * from quiz;

select * from usuarios;

SET foreign_key_checks = 0;
-- Delete o que tiver que deletar

SET foreign_key_checks = 1;  
-- // Ative a checagem novamente

SET foreign_key_checks = 0;  
-- // Delete o que tiver que deletar

SET foreign_key_checks = 1;  
-- // Ative a checagem novamente



