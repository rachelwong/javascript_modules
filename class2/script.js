// ********************************************************************* //
// HOISTING
// helps with debugging obscure bugs
// lifts all of your variable defintiions to the top of the file, irrespective of whether you did it manually or not
// allows the function to be called before it is declared
// function could be called from different files, so order does not matter as much

//------------------------
// Scenario 1
var a = 1
console.log(a, b) // this results in an undefined value for b
var b = 2

//------------------------
// Scenario 2
var a
var b

a = 1
console.log(a, b)
b = 2

//------------------------
// Scenario 3
let a = 1
console.log(a, b)
let b = 2 // this results in a reference error
// let and const doesn't get hoisted
// only vars will be hoisted

//------------------------
// Scenario 4
answer = sum(1, 2)
console.log(answer)
function sum(a, b) {
	return a + b
}
// The function gets hoisted at runtime
// If hoisting didn't existed, you will need to code in the right order

// Possible practice:  Declare functions first before you use them. Put main program at the bottom
// functions will be hoisted, vars will be hoisted.

// ********************************************************************* //
// // OBJECTS
let obj1 = {}
obj1.name = "Matt" // add properties to object
console.log(obj1)

// // protyptes are instance of the main object
// // javascript is prototype based
// // making a clone of an object when you are maknig an instance
// // object serves the same purpose as the class. provides a template for a new object
obj1["age"] = 46
console.log(obj1)

let student = {
	name: "bob",
	age: 22,
	address: {
		street: "123 Any Drive",
		state: "NSW",
		city: "Sydney"
	}
}
console.log(student)
console.log(student.address.street)

let obj2 = new Object()
// // OBject() is a constructor function. (initialise function in ruby)
// // it initalises a new instance of an object/class
// // call the constructor on Object()
// // Object() doesnt' accept any parameters
console.log(obj2)

// CREATING OWN CONSTRUCTOR
//no concept of a class in js (prototype-based, not class-based), we didn't need to put the constructor in anything.
// we have to put our intialize method inside class for ruby. in js, we just create the function directly.
// use camel_case

function Person(name, age) {
	// ruby equivalent is self.name = name
	this.name = name
	this.age = age
	this.awesome = true
}
// // the function Person is only a constructor function due to the way we use it here with the "new Person()"
// // the new keyword make it an object (mandatory)
let student2 = new Person("Sarah", 24)
console.log(student2)

// // use dot notation or bracket notation to access the properties of the object
// // can dynamically add properties
console.log(student2.name)
console.log(student2.__proto__) //looking at prototype of this objects

let student3 = new Person("Harry", 20)
let student4 = new Person("Sarah", 30)
let student5 = new Person("Mary", 40)

// // add an extra property to student
// // student2.__proto__.country = "AU" // appears in proto
Person.prototype.country = "AU" // -- THIS IS BEST PRACTICE HERE --
console.log(student2.country) // beacuse it uses __proto, AU is avaialble to all objects
console.log(student3.country)

// // can override prototype assignment
student4.country = "USA" // this assigns it to the hash
console.log(student4)
console.log(student4.country)

// Takeaway: Objects will inherit whatever it is in the prototype, unleess you override.
// Slight simliarites with classes in ruby with slighly different concept

// examples illustrating prototypes
function Hero(name, level) {
	this.name = name
	this.level = level

	// declaring an anonymous function and store it in a variable called shout
	// could cause performance load depending on how many objects are initialised
	// see below refactoring
	this.shout = function() {
		return `My name is ${this.name}!`
	}
}

// Refactoring anonymous shout function
// put function in prototype so that it exists one time and shared by all instances irrespective of how many are initialised
Hero.prototype.shout = function() {
	return `My name is ${this.name}!`
}

let batman = new Hero("Batman", 100)
let thanos = new Hero("Thanos", 9000)

console.log(batman)
console.log(thanos)

console.log(`Shouting`)
console.log(batman.shout())
console.log(thanos.shout())
