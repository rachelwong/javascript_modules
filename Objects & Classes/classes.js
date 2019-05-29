// // DECLARING A CLASS
class Rectangle {
	// TO RETURN
	// static foo = "bar"
	constructor(height, width) {
		this.height = height
		this.width = width
	}

	// 	//inside the class, we don't need the function keyword
	area() {
		return this.width * this.height
	}
}

let r = new Rectangle(20, 10)
console.log(r.area())
// TO RETURN
// // can add properties to classe. But this adds to the prototype.
// Rectangle.foo = "bar"
console.log(r)

// INHERITANCE
class Shape {
	constructor(w, h) {
		// this is the same as @ in ruby
		// they are instance variables
		this.height = h
		this.width = w
	}
	area() {
		return this.width * this.height
	}

	describe() {
		console.log(`My dimensions are ${this.width} and ${this.height}.`)
	}
}

let n = new Shape(20, 20)
console.log(n)

// inherits from shape
class Square extends Shape {
	// get all of attributes and methods from Shape
	//construtor may not be necessary

	// make sure shape constructor receives the size
	constructor(size) {
		super(size, size) // takes the parameters back up to the constructor in shape class and sub into the width and height parameters
		// super implies that it is the original parent constructor to refer back to
	}

	say() {
		console.log("I am a square!")
		super.describe() // This is an explicit way of referring to a function in the parent class.
	}
	// dont' need to declare area function (inherited)
}

let sq = new Square(10)
console.log(`I am a square ${sq}`)
console.log(`I am of area ${sq.area()}`)
console.log(sq.say())

// if inside the object/instnace, then eveyr instance will have that attribute
// if in prototype, it
// prototype is base property (refers to the same prototype property in the memroy. There is only one to prototype in memory. )
// if attribute is in the object, it will need to be created and stroed every single time the object is insitialised
