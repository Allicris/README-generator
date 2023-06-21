// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDownGenerator = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What can this web application be used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is used for this web application?',
        choices: ['None', 'MIT', 'ISC'],
        filter(val) {
            return val;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can a software developer contribute to this web application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can one run test on this web application?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can someone reach you if they have any questions? Include your GitHub and email',
    },
    {
        type: 'input',
        name: 'video',
        message: 'Include a link to show how this README generator should work.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const markdown = markDownGenerator.generateMarkdown(answers);
   fs.writeFile(fileName, markdown,  (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('File Successfully saved!');
        }
        });
    }


// TODO: Create a function to initialize app
function runQuestions() {
    return inquirer.prompt(questions)
        .then((answers) => {
            //function writeToFile(fileName, data) {}
            writeToFile('README.md', answers); 
            return answers
        })
        .catch((error) => {
            console.log(error);
        });
}
// Function call to initialize app
runQuestions();
