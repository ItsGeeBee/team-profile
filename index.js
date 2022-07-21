const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");

let managerPerms = true;
let teamList = [];


const selectEmployee = [
    {
        type: "list",
        name: "selectEmployee",
        message: "Please choose a role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];
const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
            
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],
    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?",
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ]
};

function addNewEmployee() {
    inquirer.prompt(selectEmployee)
    .then(answer => {
        if (answer.memberType === "Manager") {
        if (canAddManager) {inquirer.prompt(questions.Manager)
        .then(answer => {

    const manager = new Manager
        (
            answer.name,
            answer.id,
            answer.email,
            answer.officeNumber
        );

        })}}})};