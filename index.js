const inquirer = require('inquirer');

const db = require('./db/connection');

inquirer.propmt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES"
          },
          {
            name: "View All Employees By Department",
            value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
          },
          {
            name: "View All Employees By Manager",
            value: "VIEW_EMPLOYEES_BY_MANAGER"
          },
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE"
          },
          {
            name: "Remove Employee",
            value: "REMOVE_EMPLOYEE"
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE"
          },
          {
            name: "Update Employee Manager",
            value: "UPDATE_EMPLOYEE_MANAGER"
          },
          {
            name: "View All Roles",
            value: "VIEW_ROLES"
          },
          {
            name: "Add Role",
            value: "ADD_ROLE"
          },
          {
            name: "Remove Role",
            value: "REMOVE_ROLE"
          },
          {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS"
          },
          {
            name: "Add Department",
            value: "ADD_DEPARTMENT"
          },
          {
            name: "Remove Department",
            value: "REMOVE_DEPARTMENT"
          },
          {
            name: "View Total Utilized Budget By Department",
            value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT"
          },
          {
            name: "Quit",
            value: "QUIT"
          }
        ]
      }
    ])
    .then(res => {
        const option = res.choice;
        switch (option) {
            case "VIEW_EMPLOYEES":
                // will implement later
                break;
            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                // will implement later
                break;
            case "VIEW_EMPLOYEES_BY_MANAGER":
                // will implement later
                break;
            case "ADD_EMPLOYEE":
                // will implement later
                break;
            case "REMOVE_EMPLOYEE":
                // will implement later
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                // will implement later
                break;
            case "UPDATE_EMPLOYEE_MANAGER":
                // will implement later
                break;
            case "VIEW_DEPARTMENTS":
                // will implement later
                break;
            case "ADD_DEPARTMENT":
                // will implement later
                break;
            case "REMOVE_DEPARTMENT":
                // will implement later
                break;
            case "VIEW_ROLES":
                // will implement later
                break;
            case "ADD_ROLE":
                // will implement later
                break;
            case "REMOVE_ROLE":
                // will implement later
                break;
            case "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT":
                // will implement later
                break;
        }
    });

    