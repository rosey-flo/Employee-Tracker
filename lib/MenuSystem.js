const inquirer = require('inquirer');
const client = require('../db/connection');
const Query = require('./Query')
require('console.table')

class MenuSystem {
    //=============VIEW ALL EMPLOYEES==============//
    static async viewAllEmployees() {

        const sql = `SELECT * FROM employees;`
        const data = await client.query(sql)

        console.table(data.rows)
        //CONSOLE.LOGS THE DATA IN TABLE FORMAT
    }
    //=============VIEW ALL DEPARTMENTS===============//
    static async viewAllDepartments() {

        const sql = `SELECT * FROM departments;`
        const data = await client.query(sql)

        console.table(data.rows)
        //CONSOLE.LOGS THE DATA IN TABLE FORMAT
    }
    //=============ADD EMPLOYEE===============//
    static async addEmployeePrompt() {
        // Query for Employees
        const employeesSql = `
        SELECT 
            e.id AS employee_id,
            CONCAT(e.first_name, ' ', e.last_name) AS full_name
        FROM employees AS e;`;
        const { rows: employees } = await client.query(employeesSql);

        // Query for roles
        const rolesSql = `
        SELECT 
            id AS role_id,
            title AS role_title
        FROM roles;`;
        const { rows: roles } = await client.query(rolesSql);
        
        const answerObj = await inquirer.prompt([
            {
                name: 'first_name',
                message: 'What is the Employee\'s first name?'
            },
            {
                name: 'last_name',
                message: 'What is the employee\'s last name?'
            },
            {
                name: 'role_id',
                message: 'What is the Employee\'s role?',
                type: 'list',
                choices: roles.map(rolesObj => {
                    return {
                        name: rolesObj.role_title,
                        value: rolesObj.role_id
                    }
                })
            },
            {
                name: 'manager_id',
                message: 'Please select the employee\'s manager',
                type: 'list',
                choices: employees.map(employeesObj => {
                    return {
                        name: employeesObj.full_name,
                        value: employeesObj.employee_id
                    }
                }).concat({ name: 'None', value: null }) // Option for no manager
            }
        ]);
        await Query.addEmployee(answerObj);
    }

    //=============ADD EMPLOYEE ROLE===============//
    static async showAddRolePrompt() {
        console.log('\nPlease enter the new Role you would like to add\n')

        const { rows: departments } = await client.query(`SELECT id AS department_id, dep_name AS department_name FROM departments`);
        const answerObj = await inquirer.prompt([
            {
                name: 'title',
                message: 'What is the name of the role?'
            },
            {
                name: 'salary',
                message: 'What is the Salary of the role?'
            },
            {
                name: 'department_id',
                message: 'Which department does the role belong to?',
                type: 'list',
                choices: departments.map(departmentsObj => {
                    return {
                        name: departmentsObj.department_name,
                        value: departmentsObj.department_id
                    }
                })
            }
        ]);
        await Query.addRole(answerObj);

    }
    //=============UDATE EMPLOYEE===============//
    static async updateEmployeePrompt() {
        // Query for Employees
        const employeesSql = `
        SELECT 
            e.id AS employee_id,
            CONCAT(e.first_name, ' ', e.last_name) AS full_name
        FROM employees AS e;`;
        const { rows: employees } = await client.query(employeesSql);

        // Query for roles
        const rolesSql = `
        SELECT 
            id AS role_id,
            title AS role_title
        FROM roles;`;

        const { rows: roles } = await client.query(rolesSql);
        const answerObj = await inquirer.prompt([
            {
                name: 'employee_id',
                message: 'Which employee\'s role would you like to update?',
                type: 'list',
                choices: employees.map(employeesObj => {
                    return {
                        name: employeesObj.full_name,
                        value: employeesObj.employee_id
                    }
                })
            },
            {
                name: 'role_id',
                message: 'Which role would you like to assign the selected employee?',
                type: 'list',
                choices: roles.map(rolesObj => {
                    return {
                        name: rolesObj.role_title,
                        value: rolesObj.role_id
                    }
                })
            }
        ]);
        await Query.updateEmployee(answerObj);
    }
    static async addDepartmentPrompt() {
        const sql = `SELECT dep_name AS department_name FROM departments;`
        const { rows:departments } = client.query(sql);
        const answerObj = await inquirer.prompt([
            {
                name: 'department_name',
                message: 'What is the name of the department?'
            }
        ]);
        await Query.addDepartment(answerObj);
    }

}




module.exports = MenuSystem;






