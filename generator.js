#!/usr/bin/env/ node
const fs = require('fs');

fs.mkdir('projects', err => {
  if (err) throw err;
  console.log('The projects directory has been created');
  fs.writeFile('projects/index.js', '', err => {
    if (err) throw err;
    console.log('File index.js has been created successfully!');
  });
  fs.mkdir('projects/spec', err => {
    if (err) throw err;
    console.log('The spec directory has been created');
    fs.writeFile(
      'projects/spec/index.spec.js',
      'const chai = require("chai");',
      err => {
        if (err) throw err;
        console.log('The spec file has been successfully created!');
      }
    );
  });
  fs.writeFile('projects/.gitignore', '', err => {
    if (err) throw err;
    console.log('File .gitignore has been created successfully!');
  });
  fs.writeFile(
    'projects/package.json',
    `{
    "name": "ProjectGenarator",
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
      console.log('File package.json has been created successfully!');
    }
  );
  fs.writeFile('projects/READ.md', '', err => {
    if (err) throw err;
    console.log('File READ.md has been created successfully!');
  });
});
