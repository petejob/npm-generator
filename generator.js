#!/usr/bin/env node
const fs = require(`fs`);
const inquirer = require(`inquirer`);

const QUESTIONS = [
  {
    name: `project-name`,
    type: "input",
    message: `Project name: `,
    validate: function(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores and hashes.";
    }
  }
];

inquirer.prompt(QUESTIONS).then(answers => {
  const projectName = answers[`project-name`];

  createProject(projectName);
});

function createProject(projectName) {
  fs.mkdir(`${process.cwd()}/${projectName}`, err => {
    if (err) throw err;
    fs.writeFile(`${projectName}/index.js`, "", err => {
      if (err) throw err;
    });
    fs.mkdir(`${process.cwd()}/${projectName}/spec`, err => {
      if (err) throw err;
      fs.writeFile(
        `${process.cwd()}/${projectName}/spec/index.spec.js`,
        "const chai = require(`chai`);",
        err => {
          if (err) throw err;
        }
      );
    });
    fs.writeFile(`${process.cwd()}/${projectName}/.gitignore`, "", err => {
      if (err) throw err;
    });
    fs.writeFile(
      `${process.cwd()}/${projectName}/package.json`,
      `{
      "name": "${projectName}",
      "version": "1.0.0",
      "description": "",
      "main": "generator.js",
      "scripts": {
        "test": "mocha ./spec/"
      },
      "devDependencies": {
        "chai": "^3.5.0",
        "eslint": "^3.15.0"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    `,
      err => {
        if (err) throw err;
      }
    );
    fs.writeFile(`${process.cwd()}/${projectName}/READ.md`, "", err => {
      if (err) throw err;
    });
  });
}
