//basic server set up
const express = require("express")
// const studentRoutes = require("./routes/students")
const Sequelize = require("sequelize")
const bodyParser = require("body-parser")
let sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/nodetest')
// initialise a students array
const students = ["Natasha", "Joe", "Matt", "Rachel", "Glen", "Dana"]

const app = express() // pull in express
const port = 3000

// TIP: PUT ALL OF THE SEQUELIZE config into a db.js and require it into the main file

// INITIALISE AN INSTANCE OF SEQUELIZER - VERSION 1
// sequelize won't create db automatically. manual process
// create the database from pg admin. sequelize will look after the defintiion of the database
// need to pass four things: name of database, username, password, {object containing configuration information}
// const sequelize = new Sequelize("nodetest", "postgres", "postgres", {
// 	host: "localhost",
// 	dialect: "postgres", // dialect specify what database system we are using (mysql, mariadb, msSQL, postgres, sqlite)
// 	port: 5432 //. This is not necessary if using the default setting port
// })

// INITIALISE AN INSTANCE OF SEQUELIZER - VERSION 2
// alternative version 2. database connection string
// const sequelize = new Sequelize("databaseType://username:password@host:port/nameofdatabase")
// const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432/nodetest")

// OPEN CONNECTION TO DATABASE
// use the credentials provided in the intialise config above
// promise based. can use asyn/await
sequelize
	.authenticate()
	.then(() => {
		console.log("connection successful!")
	})
	.catch(err => {
		console.error("Unable to connect: ", err)
	})

// Define student model
// .define ('name of model/db table", {object containing attributes})
const Student = sequelize.define("student", {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	dob: Sequelize.DATE
})
// sync the physical database iwht the defined model
// essentially a db:migrate
sequelize.sync().then(() => {
	console.log("Models synced!")
	//creates student object to insert into the student table
	Student.create({
		name: "Bob",
		dob: "1986-10-24" //this is the acceptabel format for date
	})
})

let requestTime = (req, res, next) => {
	console.log("entered requestTime")
	req.requestTime = Date.now()
	next()
}

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