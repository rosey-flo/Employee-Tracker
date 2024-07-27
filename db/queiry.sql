\c employee_manager
SELECT 
e.id AS employee_id,
CONCAT(e.first_name, ' ', e.last_name) AS full_name,
r.title AS role_title,
r.id AS role_id
FROM employees as e
    LEFT JOIN roles as r
    ON e.role_id = r.id;
        

-- SELECT * FROM employees;
-- SELECT 
-- id AS employee_id,
-- CONCAT(e.first_name, ' ', e.last_name) AS full_name,
-- role_id,
-- r.title
-- FROM employees AS e
--     LEFT JOIN roles as r;
--         ON e.role_id = r.id;