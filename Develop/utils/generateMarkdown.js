// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

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
${answers.license}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## Questions
${answers.questions}

##Video
${answers.video}
`;
}

module.exports = {
generateMarkdown,
};