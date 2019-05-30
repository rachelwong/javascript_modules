//basic server set up

const express = require("express") // pull in the express package
const bodyParser = require("body-parser") // pull in body parser
const app = express() // pull in express
const port = 3000

// initialise a students array
const students = ["Natasha", "Joe", "Matt", "Rachel", "Glen", "Dana"]

// app.set("view engine", "pug")
app.set("view engine", "ejs")

// body parser needs to happen first
// body parser is a module so .use
// app.user(bodyParser.json()) // if i want to accept
// parse it according to function
app.use(bodyParser.urlencoded()) // middleware

// sets up a home route
// the router is essentialy middleware
// the router is intercepting the incoming request and matches the pattern of the arguments
app.get("/", (req, res) => {
	// res.send("Hello World!")
	res.render("index", {
		title: "Hey",
		message: "Hello from EJS!"
	})
})

// set up a localhost:3000/students route
app.get("/students", (req, res) => {
	res.send(students)
})

// set up a localhost:3000/students route
app.post("/students", (req, res) => {
	console.log(req.body.name)
	students.push(req.body.name) // pass in the name rom the request body
	res.send(`Added student ${req.body.name}`)
})

// everything above is configuration and the server is not running.
// callback is optional
app.listen(port, () => {
	// this runs on the terminal console, not the browser console
	console.log(`Server is running on http://localhost:${port}`)
})

// Express handles unknown URL routes automatically (logs a 404 on console)
// Express will do JSON.stringify automatically
