create database if not exists CodeUp;
use CodeUP; 

create table if not exists users(
id int auto_increment primary key,
nombre varchar(100) not null,
apellido varchar(100) not null,
email varchar(100) not null unique,
contraseña varchar (100) not null
);

select * from users;