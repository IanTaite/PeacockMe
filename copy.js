const fs = require("fs");
const path = require('path');
const now = new Date();
const seconds = now.getSeconds().toString().padStart(2, '0');
const inputFilename = path.resolve('./.vscode/settings.json');
const outputFilename = path.resolve(`./settings_${seconds}.json`);
fs.copyFileSync(inputFilename, outputFilename);
console.log(inputFilename, outputFilename);