// Linking packages and classes 

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const generateTeamPage = require('./lib/HTMLtemplate.js');

// define needed variables 
let teamList = [];

// prompt for which employee to add to array
const selectEmployee = [
    {
        type: "list",
        name: "employeeRole",
        message: "Please choose a role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

// questions for each employee based off inqurier documentation 
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
        if (answer.employeeRole === "Manager") {
       inquirer.prompt(questions.Manager)
        .then(answer => {

    const manager = new Manager
        (   answer.name,
            answer.id,
            answer.email,
            answer.officeNumber
        );

    teamList.push(manager)
    if (answer.addNew === "yes") {
        addNewEmployee();
         } else {
        generate();
        } 
    })

    } else if (answer.employeeRole === "Engineer") {
    inquirer.prompt(questions.Engineer)
    .then(answer => {

     const engineer = new Engineer
       (answer.name,
        answer.id,
        answer.email,
        answer.school
        
        );

    teamList.push(engineer);
    console.log(teamList);
        if (answer.addNew === "yes") {
            addNewMember();
        } else {
            generate();
        };
    })
} else if (answer.employeeRole === "Intern") {
    inquirer.prompt(questions.Intern)
    .then(answer => {

     const intern = new Intern
       (answer.name,
        answer.id,
        answer.email,
        answer.github
        
        );
    teamList.push(intern);
    console.log(teamList);
        if (answer.addNew === "yes") {
            addNewMember();
        } else {
            generate();
        };
    });
}})
};

function generate() {
    fs.writeFileSync('./dist/index.html',generateTeamPage(teamList),function (err) {
        if (err) {
          console.log(err);
      } else {
        console.log("Your team profile has been successfully created! Please check out the index.html")
    }
})};

addNewEmployee()