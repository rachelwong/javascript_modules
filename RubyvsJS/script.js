console.log("Hello World!")
let people = ["garrett", "hamish", "matt"]

// //////******************************************************************************//////

// // DESTRUCTURING
// breaking an array into parts and assigning multipe variables
let firstPerson = people[0]
// let [firstPerson] = people
let [dummy, first, second] = people
console.log(first)
console.log(second)

// //////******************************************************************************//////

// // SPREADING ARRAYS
// // spreading arrays and creating a new array from those elements
let bobBirds = ["Robin", "crow", "magpie"]
console.log(`this is bobBirds ${bobBirds}`)
let sallyBirds = ["Hawk", "Eagle"]
console.log(`this is sallyBirds ${sallyBirds}`)
let allBirds = [...bobBirds, ...sallyBirds]
console.log(`This is allBirds ${allBirds}`)

// //////******************************************************************************//////

// // CONTROL STRUCTURES
let age = prompt("What is your age?")
if (age > 18) {
	console.log("you are an adult")
} else if (age < 18 && age >= 13) {
	console.log("You are a teenager")
} else {
	console.log("You are a child")
}

// //////******************************************************************************//////

// // TERNARYS

// let yourAge = 19
allowed = age > 18 ? "Yes" : "no"
console.log(`Are you allowed? ${allowed}`)

// //////******************************************************************************//////

// // CASE STATEMENT
let fav_bird = prompt("Enter a bird name:")
switch (fav_bird) {
	//combine cases together with one result

	// 	// 	// can also be written as case "seagull", "pelican":
	case "seagull":
	case "pelican":
		console.log("You like seabirds")
		break

		// 	// 	// single separate cases
	case "crow":
		console.log("You like crows.")
		break
	case "robin":
		console.log("You like robins.")
		break
	default:
		console.log("I don't know that bird")
}

// //////******************************************************************************//////

// // WHILE LOOP
let count = 3
while (count > 0) {
	console.log(count--)
	// count--
}

// // DO WHILE LOOP
console.log("do...while")
let count = -1
do {
	//This will happen at least once
	console.log(count--)
} while (count > 0)

//////******************************************************************************//////

// MANIPULATING ARRAYS

let fav_foods = ["pizza", "bagel", "bread"]
// this shows the actual value in the array
for (let val of fav_foods) {
	console.log(val)
}

//this shows the index only
for (let val in fav_foods) {
	console.log(val)
}

// this shows the index position and the actual value of the array
for (let val in fav_foods) {
	console.log(`${val} is ${fav_foods[val]}`)
}

// // Creating an object using hashes
let cohort = {
	name: "Fast Track",
	students: 20,
	teacher: "Matt",
	city: "Brisbane"
}

// // Val will take on each of the key name in the object hash
for (let val in cohort) {
	console.log(`${val} is ${cohort[val]}`)
}

// // passing an anonymous function
// // visit each eleme	nt of the array and pass into the anonymous function the value and index of that array
// // argument names are arbitray but the order of the argument is important
fav_foods.forEach(function (value, index) {
	console.log(`The foreach method returns this ${index} index value with ${value} as value.`)
})

// //////******************************************************************************//////

// // ORIGINAL FOR LOOP
// let i = 0 is the initialiser and will be executed once right at the start of the loop
// second part is the condition for the loop to run
// third part gets executed at the end of the block each time the block is run through
for (let i = 0; i < 10; i++) {
	console.log(i)
}