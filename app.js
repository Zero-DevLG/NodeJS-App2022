const { createFile } = require('./helpers/operations');
const argv = require('./config/yargs');
const colors = require('colors/safe');

console.clear();

createFile(argv.b,argv.l,argv.i)
.then( nameFile =>console.log(colors.blue(nameFile,'creado')))
.catch(err => console.log(colors.red(err)));


