drop database if exists 'employee_db';

create database 'employee_db';

use 'employee_db';


create table 'department' (
    'id' int not null auto_increment,
    'name' varchar(30) not null,
    primary key ('id')
);

create table 'role' (
    'id' int not null auto_increment,
    'title' varchar(30) not null,
    'salary' decimal(10,2) not null,
    'department_id' int not null,
    primary key ('id'),
    foreign key ('department_id') references 'department' ('id') on delete cascade on update cascade
);

create table 'employee' (
    'id' int not null auto_increment,
    'first_name' varchar(30) not null,
    'last_name' varchar(30) not null,
    'role_id' int not null,
    'manager_id' int,
    primary key ('id'),
    foreign key ('role_id') references 'role' ('id') on delete cascade on update cascade,
    foreign key ('manager_id') references 'employee' ('id') on delete set null on update cascade
);
