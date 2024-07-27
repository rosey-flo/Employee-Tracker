const client = require('../db/connection')

class Query {
    static async addEmployee({first_name, last_name, role_id, manager_id}) {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`
        await client.query(sql, [first_name, last_name, role_id, manager_id])

        console.log('Employee added succesfully!\n')
    }

    static async addRole({title, salary, department_id}) {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`;
        await client.query(sql, [title, salary, department_id])

        console.log('Role Added Successfully!\n')
    }

    static async updateEmployee({employee_id, role_id}) {
        const sql = `
        UPDATE employees
        SET role_id = $1
        WHERE id = $2;`;
        await client.query(sql, [employee_id, role_id])

        console.log('Employee role has been updated!\n')
    }

    static async addDepartment({department_name}) {
        const sql = `INSERT INTO departments (dep_name) VALUES ($1)`
        await client.query(sql, [department_name])

        console.log('Department successfully added!\n')
    }
}
module.exports = Query;