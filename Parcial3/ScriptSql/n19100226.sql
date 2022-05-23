create database n19100226;

use n19100226;

create table cliente
( idCliente smallint not null auto_increment,
nomCliente varchar(30),
dirCliente varchar(30),
nomPaciente varchar(30),
razaPaciente varchar(30),
pesoPaciente varchar(10),
tamPaciente varchar(30),
colPaciente varchar(30),
primary key (idCliente)
);

select * from cliente;

insert into cliente (nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente)
values ('Citlali Nila', 'Josefa Ortiz de Dominguez 3225', 'Chokis', 'Chihuahua', '5.6 kg', 'Chico', 'Negro con patas blancas');
insert into cliente (nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente)
values ('Rogelio Nila', 'Campeche 3475', 'Chuky', 'Pitbull', '27.5 kg', 'Mediano', 'Gris plata');
insert into cliente (nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente)
values ('Sonia Gutierrez', 'Sonora 5441', 'Tiki', 'Gato siberiano', '4.7 kg', 'Chico', 'Gris claro con pecho blanco');
insert into cliente (nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente)
values ('Itzamara Gutierrez', 'Reforma 1926', 'Quesadilla', 'Gato pelo corto', '3.6 kg', 'Chico', 'Cafe con rayas');
insert into cliente (nomCliente, dirCliente, nomPaciente, razaPaciente, pesoPaciente, tamPaciente, colPaciente)
values ('Eduardo Rodriguez', 'Cronos 5054', 'Chompi', 'Chihuahua', '4.2 kg', 'Chico', 'Miel');