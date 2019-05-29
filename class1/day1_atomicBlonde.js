// Atomic Blonde Number: a number is an atomic blonde number if the sum and product of its digits are equal. For example, 123 is an atomic blonde number, as the sum of its digits (1+2+3) is 6, which is equal to the product of its digits (1*2*3). Write a program to check if a number is an atomic blonde number or not.

var number = prompt("Enter a number: ")
let num_array = number
	.toString()
	.split("")
	.map(Number)

function arrSum(num_array) {
	let a = 0
	for (let val of num_array) {
		a += val
	}
	return a
}

function arrSum(num_array) {
	return num_array.reduce(function(a, b) {
		return a + b
	})
}

let sum = arrSum(num_array)
let times = num_array.reduce((a, b) => a * b)

if (sum == times) {
	console.log(`${number} is an Atomic Number.`)
} else {
	console.log(`${number} is a regular number.`)
}
