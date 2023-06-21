// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges = {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    return badges[license]
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    const licenseLinks = {
        ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
        MIT: '[MIT](https://choosealicense.con/licenses/mit/)',
    }
    return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license) {
        return `Licensed under the ${renderLicenseLink(license)} license`
    } else {
        return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)
- [Video](#Video)

## Description
${answers.description}

## Usage
${answers.usage}

## License
${renderLicenseSection(answers.license)}

## Installation
${answers.installation}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## Questions
${answers.questions}

## Video
${answers.video}
`;
}

module.exports = {
    generateMarkdown,
};