// License badges.  If "none" or "other", this returns an empty string.
function renderLicenseBadge(license) {
  if (license != "none") {
    return `![license](https://img.shields.io/github/license/<jhopkins42>/<proclimationCryer>)`;
  }
}


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

# Features
${data.features}
# License(s)
${data.license}
# Languages
${data.languages}
# Dependencies
${data.dependencies}
# What's this button for? (or How to Use this Application)
${data.description}
# How amazingly does it do it?
${data.flightSpeeds}
# Testing
${data.testing}
# Contributors
${data.contributors}
# Questions
If you have questions, you can reach this ${data.name} at github.com/${data.repo}, otherwise contact the file user by email at: ${data.email}

`;
}

module.exports = generateMarkdown;
