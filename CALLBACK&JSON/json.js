// **************** JSON **************** //
// Javascript Object Notation

// HTML is a specialised form of XML create arbitrary tags to create a data structure
// XML is verbose, hard to read, takes up a lot of space which is not ideal for network transfer (not great for web dev)
// A terse format is JSON
// Language independent, easy to read/write, store in database fields

// *** JAVASCRIPT VERSION
let person = {
	name: "John",
	city: "Brisbane",
	age: "31",
	hobbies: ["Hiking", "Reading", "Cooking"]
}

console.log(person)

// *** JSON VERSION

let personJSON = `{
  "name" : "John",
  "city" : "Brisbane",
  "age" : 31,
  "hobbies" : [
    "Hiking",
    "Reading", 
    "Cooking"
  ]
}`

console.log(typeof personJSON) // returns the personJSON as string

// to draw out the attributes from the JSON string, below is required first
let person = JSON.parse(personJSON)

console.log(person.name)
console.log(person.age)
console.log(person.hobbies)

// TO DO THE REVERSE: to convert object hierarchy object ot JSON string
let books = []
books.push({
	title: "IT",
	author: "Stephen King"
})

books.push({
	title: "Foundation",
	author: "Isaac Asimov"
})

console.log(`books object is a type of ${typeof books}`)

// below line converts a javascript object into a JSON object
let bookJSON = JSON.stringify(books)
console.log(bookJSON)
console.log(`bookJSON is a type of ${typeof bookJSON}`)

// if you have a JSON text file, it is human editable

let londonWeather = {
	coord: {
		lon: -122.09,
		lat: 37.39
	},
	sys: {
		type: 3,
		id: 168940,
		message: 0.0297,
		country: "US",
		sunrise: 1427723751,
		sunset: 1427768967
	},
	weather: [{
		id: 800,
		main: "Clear",
		description: "Sky is Clear",
		icon: "01n"
	}],
	base: "stations",
	main: {
		temp: 285.68,
		humidity: 74,
		pressure: 1016.8,
		temp_min: 284.82,
		temp_max: 286.48
	},
	wind: {
		speed: 0.96,
		deg: 285.001
	},
	clouds: {
		all: 0
	},
	dt: 1427700245,
	id: 0,
	name: "Mountain View",
	cod: 200
}

let weather = JSON.stringify(londonWeather)
console.log(JSON.parse(weather))

// Asynchronous processe are concurrent
// The notion of Synchronous is related to time