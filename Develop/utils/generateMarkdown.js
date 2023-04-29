// License badges.  If "none" or "other", this returns an empty string.
function renderLicenseBadge(license) {}


// License link.  If "none" or "other", this returns an empty string
function renderLicenseLink(license) {}

// License section.  If "none" or "other", this returns an empty string
function renderLicenseSection(license) {}

// coding to create the README file
function generateMarkdown(data) {
  return `# ${data.title}
## description
${data.description}
## Table of Contents
* [Features](#features)
* [License(s)](#license)
* [Languages](#languages)
* [Dependencies](#dependencies)
* [How to use this application](#HowtoUseThisApplication)
* [Testing](#testing)
* [Contributors](#contributors)
* [Questions](#questions)

## Features
$(data.features)
## License(s)
$(data.license)
## Languages
$(data.languages)
## Dependencies
$(data.dependencies)
## What's this button for? (or How to Use this Application)
$(data.description)
## How amazingly does it do it?
$(data.quest)
## Testing
$(data.test)
## Contributors
$(data.contributors)
## Questions
$(data.license)

`;
}

module.exports = generateMarkdown;
