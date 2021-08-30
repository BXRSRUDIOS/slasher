function input(){
const chalk = require('chalk');

console.log(chalk.bold("Slasher Setup"))
console.log(chalk.bold("-------------"))


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Bot Token: `, token => {


readline.question(`Bot Prefix: `, prefix => {
  
readline.question(`Bot Status: `, status => {
  


console.log(chalk.bold("-------------"))
console.log(chalk.bold.green("Setup Complete"))
readline.close();

// Files //
const index = require('./CreateFiles/index');
const config = require('./CreateFiles/config');
const ready = require('./CreateFiles/ready');
const interactionCreate = require('./CreateFiles/interactionCreate');
const slash = require('./CreateFiles/slash');
const eventsFile = require('./CreateFiles/events');

// Folders //
const events = require('./CreateFolders/events');
const handlers = require('./CreateFolders/handlers');

// Folders //
events()
handlers()

// Files //
ready()
slash()
eventsFile()
interactionCreate()
index(token);
config(prefix, status);


})
})
})
}
module.exports = input;