//* Pick any four digit number and do the following:
// Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
// Take these two numbers and subtract the smaller number from the larger.

// Suppose we choose the number 8082.

// 8820−0288=8532
// 8532−2358=6174
// 7641−1467=6174

// It hits 6174 and then stops.
// Count also how many iterations loops are required to get to this point.

// ** Bonus points for recognising what 6174 is.

var difference = 0
var counter = 1
var number = prompt("Enter a 4-digit number")
while (number != 6174) {
	// Convert number to array of integers
	let numArray = number
		.toString()
		.split("")
		.map(Number)

	console.log(`The array is ${numArray}`)

	// from smallest to largest
	function asc(numArray) {
		return numArray.sort((a, b) => a - b)
	}

	// from largest to smallest
	function desc(numArray) {
		return numArray.sort((a, b) => b - a)
	}

	let largest = desc(numArray).join("")
	console.log(`The largest number is ${largest}`)

	let smallest = asc(numArray).join("")
	console.log(`The smallest number is ${smallest}`)

	difference = largest - smallest

	console.log(`The difference between largest and smallest is ${difference}.`)
	number = difference
	console.log(`This is iteration number ${counter++}`)
}
