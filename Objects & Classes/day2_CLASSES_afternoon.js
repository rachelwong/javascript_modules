class Dog {
	constructor(name, location) {
		this.name = name
		this.location = location
		this.walks = []
	}

	// every time the walk function is called, a new walk object is created
	// the walk object is added to an array of walks belonging to the dog
	walk(location, distance) {
		let newWalk = new Walk(location, distance)
		this.walks.push(newWalk)
	}

	speak() {
		console.log(`Woof! My name is ${this.name}.`)
	}

	display_walks() {
		if (this.walks == 0) {
			console.log(`${this.name} has not been for a walk yet. `)
		} else {
			console.log(`${this.name} went for a total number of ${this.walks.length} walks.`)
			console.log(``)
		}
	}
}

class Walk {
	constructor(location, distance) {
		this.location = location
		this.distance = distance
		this.timestamp = new Date().toString //appends a datestamp to every walk
	}
}	

var btn = document.createElement("BUTTON")
btn.innerHTML = "New Dog"
var body = document.getElementsByTagName("body")[0]
body.appendChild(button)
button.addEventListener("click", function() {
    dog1 = new Dog()
    dog1.name = prompt("What is the name of your dog?")
    dog1.location = prompt("Where are you located?")
})