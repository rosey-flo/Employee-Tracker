//PACKAGES
const inquirer = require('inquirer')

//CONNECTIONS TO FILES
const client = require('./db/connection')
const MenuSystem = require('./lib/MenuSystem')

async function menuDisplay() {
    const answerObj = await inquirer.prompt (
        {
            name: 'choice',
            message: 'Please choose an option from the menu',
            type: 'list',
            choices: [
                'View all Employees',
                'Add Employee',
                'Add Role',
                'View all Departments',
                'Add Department',
                'Update Employee', //figure out if i can add this only after an employee is added or if i have to make it so the function associated will tell user to add employee first if [] is empty
                'Quit'
            ]
        }
    );
    switch(answerObj.choice) {
        case 'View all Employees':
            await MenuSystem.viewAllEmployees();
            menuDisplay();
            break;
        case 'Add Employee':
            await MenuSystem.addEmployeePrompt();
            menuDisplay();
            break;
        case 'Update Employee':
            await MenuSystem.updateEmployeePrompt();
            menuDisplay();
            break;
        case 'Add Role':
            await MenuSystem.showAddRolePrompt();
            menuDisplay();
            break;
        case 'View all Departments':
            await MenuSystem.viewAllDepartments();
            menuDisplay();
            break;
        case 'Add Department':
            await MenuSystem.addDepartmentPrompt();
            menuDisplay();
            break;
        case 'Quit':
            console.log('\nThank you for using the Employee Manager\n')
            break;
        default:
            menuDisplay();
            break;
    }  
}

async function init() {
    await client.connect()
    console.log(`
        ---------------------------
        WELCOME TO EMPLOYEE MANAGER
        ---------------------------
        `)

        menuDisplay()
}

init();
