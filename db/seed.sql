INSERT INTO departments 
(dep_name) 
VALUES
    ('Engineering'), --department id 1
    ('Finance'), --department id 2
    ('Legal'), --department id 3
    ('Sales'); --department id 4



INSERT INTO roles (
    title, 
    salary,
    department_id
    ) 
VALUES
    ('Saleslead', 35000, 4), -- 1 manager id
    ('Salesperson', 30000, 4), -- 2 role id
    ('Software Engineer', 40000, 1), -- 3 rold id
    ('Lead Engineer', 45000, 1), --4 manager id
    ('Account Manager', 55000, 2), --5 manager id
    ('Accountant', 45000, 2), --6 role id
    ('Legal Team Lead', 55000, 3), --7 manager id
    ('Lawyer', 50000, 3); --8 role id


INSERT INTO employees (
    first_name, 
    last_name,
    role_id,
    manager_id
    ) 
VALUES
    ('John', 'Smith', 2, 10),
    ('Mark', 'Chan', 2, 10),
    ('Anne', 'Reese', 2, 10),
    ('Kim', 'Sloane', 3, 11),
    ('Michael', 'Boon', 3, 11),
    ('Jane', 'Doe', 6, 12),
    ('Lisa', 'Garcia', 6, 12),
    ('Melanie', 'Moon', 8, 13),
    ('Carol', 'Rubio', 8, 13),
    ('Andrew', 'Lopez', 1, null),
    ('Franklin', 'Ruiz', 4, null),
    ('Cassandra', 'White', 5, null),
    ('Samantha', 'Morgan', 7, null)
