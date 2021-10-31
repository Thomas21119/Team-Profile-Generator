// packages

const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const HtmlGenerator = require("./src/HtmlGenerator");
const CardGenerator = require("./src/CardGenerator");

// text location to push each team member onto
let generatedTeam = "";

// inquirer menu options
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

// opening Function asking questions for the Manager, saving the options, then opening the menu called create team
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
      let generator = new CardGenerator();
      generatedTeam += `${generator.managerGenerator(manager)}`;
      createTeam();
    });
}

// opening Function asking questions for the Engineer, saving the options, then opening the menu called create team
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
      let generator = new CardGenerator();
      generatedTeam += `${generator.engineerGenerator(engineer)}`;
      createTeam();
    });
}

// opening Function asking questions for the Intern, saving the options, then opening the menu called create team
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
      let generator = new CardGenerator();
      generatedTeam += `${generator.internGenerator(intern)}`;
      createTeam();
    });
}

// basic questions function to save code on the create functions
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

// build the html with saved answers
function buildTeam() {
  let htmlGenerator = new HtmlGenerator();
  fs.writeFile(
    "./dist/generatedTeam.html",
    htmlGenerator.template(generatedTeam),
    (err) =>
      err
        ? console.log(err)
        : console.log("Your team has been generated in the 'dist' folder.")
  );
}

// on initiation run create manager function
createManager();
