// DAY 2 OBJECTS

// CHALLENGE
let me = {}
me.age = 33
me.location = "Brisbane"
console.log(me.age, me.location)
me.hobbies = ["Sleeping", "Eating", "Movies"]
console.log(me.age, me.location, me.hobbies)
delete me.age
console.log(me)
for (thing of me.hobbies) {
	console.log(thing)
}

// BEAST MODE
me.hobbies.push("Walking")
console.log(me.hobbies)
me.hobbies.shift()
console.log(me.hobbies)
me.mother = { name: "Fay", age: 65, location: "Brisbane" }
console.log(me)
me.mother.print_details = function() {
	console.log(
		`Mother details --- name: ${me.mother.name}, age: ${me.mother.age}, location: ${
			me.mother.location
		}`
	)
}
me.mother.print_details()

// BEAST MODE ++
const sydney_campus = { state: "NSW", street: "7 Kelly St" }
const brisbane_campus = { state: "QLD", street: "205 N Quay" }
const melbourne_campus = { state: "VIC", street: "120 Spencer St" }
const coder_academy = {
	sydney: sydney_campus,
	melbourne: melbourne_campus,
	brisbane: brisbane_campus
}
console.log(
	`My campus address is ${coder_academy.brisbane.street}, ${coder_academy.brisbane.state}.`
)

// if deleted the state, it will return undefined.
