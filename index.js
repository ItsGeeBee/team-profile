// Linking packages and classes 

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");

// define needed variables 
let managerPerms = true;
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
        answer.github
        
        );

    team.push(engineer);
        if (answer.addNew === "yes") {
            addNewMember();
        } else {
            generate();
        };
    });
}})
};



function generate(data) {
    fs.writeFileSync('index.html', data,function (err) {
        if (err) {
          console.log(err);
      } else {
        console.log("Your team profile has been successfully created! Please check out the index.html")
    }
})};

addNewEmployee()