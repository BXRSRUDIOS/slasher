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

const index = require('./CreateFiles/index');
const config = require('./CreateFiles/config');
const ready = require('./CreateFiles/ready');

const events = require('./CreateFolders/events');

events()
ready()
index(token);
config(prefix, status);


})
})
})
}
module.exports = input;