class Dog {
	constructor(name) {
		this.name = name
		this.walks = [] //dog can have many walks

		this.distanceWalked = 0
	}

	// every time the walk function is called, a new walk object is created
	// the walk object is added to an array of walks belonging to the dog
	walk(location, distance) {
		let newWalk = new Walk(location, distance)
		this.walks.push(newWalk)
		this.distanceWalked += distance
	}

	speak() {
		console.log(`Woof! My name is ${this.name}.`)
	}

	display_walks() {
		if (this.walks == 0) {
			console.log(`${this.name} has not been for a walk yet. `)
		} else {
			console.log(
				`${this.name} went for a total number of ${
					this.walks.length
				} walks for a total distance of ${this.distanceWalked} kilometres.`
			)
		}
	}
}

class Walk {
	constructor(location, distance) {
		this.location = location
		this.distance = distance
	}
}

dog1 = new Dog("Spot", "Brisbane")
dog1.walk("Spring Hill", 1)
dog1.walk("Spring Hill", 1)
dog1.walk("Spring Hill", 1)
dog1.display_walks()
dog1.speak()
dog1.display_walks()

var btn = document.createElement("BUTTON")
btn.innerHTML = "New Dog"
var body = document.getElementsByTagName("body")[0]
body.appendChild(button)
button.addEventListener("click", function() {
	dog1 = new Dog()
	dog1.name = prompt("What is the name of your dog?")
	dog1.location = prompt("Where are you located?")
})
