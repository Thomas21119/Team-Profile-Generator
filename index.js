const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
let team = [];

function menu() {
  createManager();
}

function createTeam() {
  inquirer
    .prompt([
      {
        name: "memberChoice",
        type: "list",
        message: "what do you want to do",
        choices: ["Add Engineer", "Add Intern", "Team is Completed"],
      },
    ])
    .then((choices) => {
      switch (choices.memberChoice) {
        case "Add Engineer":
          createEngineer();
          break;
        case "Add Intern":
          createIntern();
          break;
        default:
          buildTeam();
      }
    });
}

function buildTeam() {
  console.log("Build Team" + team);
}

function createManager() {
  inquirer
    .prompt(
      createTeamQuestions("manager", [
        {
          name: "officeNumber",
          type: "input",
          message: "What is the managers phone number",
        },
      ])
    )
    .then(({ name, id, email, officeNumber }) => {
      let manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      createTeam();
    });
}

function createEngineer() {
  inquirer
    .prompt(
      createTeamQuestions("engineer", [
        {
          name: "github",
          type: "input",
          message: "What is the engineers GitHub username",
        },
      ])
    )
    .then(({ name, id, email, github }) => {
      let engineer = new Engineer(name, id, email, github);
      team.push(engineer);
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt(
      createTeamQuestions("intern", [
        {
          name: "school",
          type: "input",
          message: "What is the interns school name",
        },
      ])
    )
    .then(({ name, id, email, school }) => {
      let intern = new Intern(name, id, email, school);
      team.push(intern);
      createTeam();
    });
}

menu();

function createTeamQuestions(role, customQuestions) {
  const compulsaryQuestions = [
    {
      name: "name",
      type: "input",
      message: `What is the ${role}s name`,
    },
    {
      name: "id",
      type: "input",
      message: `What is the ${role}s id`,
    },
    {
      name: "email",
      type: "input",
      message: `What is the ${role}s email`,
    },
  ];

  return [...compulsaryQuestions, ...customQuestions];
}
