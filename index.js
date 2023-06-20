// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markDownGenerator = require('./Develop/utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'Installation Instructions?',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What can this web application be used for?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license is used for this web application?',
        choices: ['None', 'MIT', 'ISC'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'How can a software developer contribute to this web application?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How can one run test on this web application?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'How can someone reach you if they have any questions?',
    },
    {
        type: 'input',
        name: 'Video',
        message: 'Include a link to show how this README generator should work.',
    }
];

// TODO: Create a function to write README file

//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function runQuestions() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const markdown = markDownGenerator.generateMarkdown(answers)
            console.log(markdown)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
};
// Function call to initialize app
runQuestions();
