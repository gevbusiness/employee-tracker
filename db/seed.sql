use employee_db;

insert into department (name) values
('Sales'),
('Engineering'),
('Finance'),
('Legal');

insert into role (title, salary, department_id) values
('Sales Lead', 100000.00, 1),
('Salesperson', 80000.00, 1),
('Lead Engineer', 150000.00, 2),
('Software Engineer', 120000.00, 2),
('Accountant', 125000.00, 3),
('Legal Team Lead', 250000.00, 4),
('Lawyer', 190000.00, 4);

insert into employee (first_name, last_name, role_id, manager_id) values
('John', 'Doe', 1, null),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, null),
('Kevin', 'Tupik', 4, 3),
('Malia', 'Brown', 5, null),
('Sarah', 'Lourd', 6, 5),
('Tom', 'Allen', 7, 5),
('Tina', 'Lee', 8, 5);

