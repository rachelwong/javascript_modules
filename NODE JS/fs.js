//export this function as a module to use in index.js

let multiply = function(x, y) {
	return x * y
}

// module is an api in node
// key value pairs
module.exports = {
	// key is what you're going to call it with
	//assign the key with the function/variable
	// key is what the rest of the world will nknow it sas
	// value is what exists inside this file
	process: multiply
}
