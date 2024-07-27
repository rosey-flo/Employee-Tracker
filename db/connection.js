const {Client} = require('pg')
const client = new Client({
    user:'postgres',
    password: 'pass',
    database: 'employee_manager'
})

module.exports = client;