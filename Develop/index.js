// required installs and imports
const inquirer = require("inquirer");
const fs = require("fs");

// defined variables
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown.js');
const { before } = require("node:test");

// user inputs to generate README blocks
const questions = [
    {
        name: "name",
        message: "What is your name?",
        type: "input",
    },
    {
        name: "repo",
        message: "What is your GitHub repository name?",
        type: "input",
    },
    {
        name: "title",
        message: "What is your project name?",
        type: "input",
    },
    {
        name: "description",
        message: "What does your project do?",
         type: "input",
    },
    {
        name: "flight speeds",
        message: "What is the flight speed of an unladen application?",
        type: "input",
    },
    {
        name: "quest",
        message: "What is your quest, er unique elements of your code?",
        type: "input",
    },
    {
        name: "contributors",
        message: "Who helped you with this nefarious deed?",
        type: "input",


    },
    {
        name: "dependencies",
        message: "What does your project need (dependencies)?", 
        type: "input",
    },
    {
        
        name: "languages",
        message: "What languages does this require?",
        type: "input",
    },
    {
        name: "license",
        message: "What is the licensing?", 
        type: "checkbox",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "CreativeCommons", "other", "none"],
    }

];

// writing the README
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Starting or initializing the app/program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("checkpoint alpha - running questions");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses}));
        console.log("checkpoint beta: do the responses work?");
        console.log("and the cat is sitting on both the mouse and keyboard, so debugging will be needed.");
    });
}

// Function call to initialize app
init();
