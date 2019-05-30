// we need to import the fs module as an obejct into the environment before we can call it
// import the fs module and assign it to the constant variable fs
// this is importing something already buitl into node
const fs = require("fs") //https://nodejs.org/dist/v10.13.0/docs/api/fs.html#fs_file_paths
const chalk = require("chalk") //not a file in the local system, so no need for relative path
// this is importing fs.js from the current directory that that the user created
const utils = require("./fs") // leave out the.js extension

// **** IN-CLASS DEMONSTRATION *** //
// https://nodejs.org/dist/v10.13.0/docs/api/fs.html#fs_fs_readfile_path_options_callback
//this function will be called after the fils i read by node.js
// the argument will always FIRST be an error, and SECOND the data
// added the "utf8" to read the contents of the file
// this callback only happens after node finished reading in the file.
// node is designed that it doesn't ever block the program from executing.
fs.readFile("movies.txt", "utf8", function(err, data) {
	// common pattern
	if (err) {
		console.log(err)
		return // this will jump out of the callback
	}
	console.log(data) // will return undefined if data doens't contain anything
})

console.log("Hello world")

// calls the multiply function from the fs.js file that is imported into this file
let result = utils.process(10, 2)
console.log(`The result is ${result}`)

console.log(chalk.blue.bgRed.bold("Hello World"))
