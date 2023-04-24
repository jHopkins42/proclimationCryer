// required installs and imports
const inquirer = require("inquirer");
const fs = require("fs");

// defined variables
const path = require("path");
const generateMarkdown = require('.utils/generateMarkdown');

// user inputs to generate README blocks
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your GitHub repository name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "What does your project do?"
    },
    {
        type: "input",
        name: "flight speeds",
        message: "What is the flight speed of an unladen application?"
    },
    {
        type: "input",
        name: "quest",
        message: "What is your quest, er unique elements of your code?"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What does your project need (dependencies)?"
    },
    {
        type: "input",
        name: "languages",
        message: "What languages does this require?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What is the licensing?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "CreativeCommons", "other", "none"]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// user inputs for generator