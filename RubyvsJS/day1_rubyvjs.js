// Ruby vs JS
var user = "tom"

if (user == "tom") {
	console.log("Hello Tom")
} else {
	console.log("Hello someone other than Tom.")
}

var age = prompt("What is your age?")

if (age == 18) {
	console.log("Welcome to casino")
} else if (age < 18) {
	alert("You are not allowed to enter the casino!")
}

// BEAST MODE Ruby vs JS 13/05/2019

var step
let students = []
students.push("sarah")

for (step = 0; step < 2; step++) {
	let newStudent = prompt(`Add a student name to the list: `)
	students.push(newStudent)
	alert(`You have added ${newStudent} to the list.`)
	console.log(students)
}
// BEAST MODE++
// hash and object is the same
let students_array = {
	name: prompt("what is your name?"),
	age: prompt("what is your age")
}

console.log(
	`The name of the studnet is ${students_array.name} and your age is ${students_array.age}`
)
