const chalk = require("chalk") //not a file in the local system, so no need for relative path

// *** CHALLENGE *** //

let greeting = chalk.bgBlue.white("Hello World")
console.log(greeting)

var inquirer = require("inquirer")

inquirer
	.prompt([
		//takes an array of questions
	])
	.then(answers => {})
