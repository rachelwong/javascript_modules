// can't user ES6 style import in express framework
// import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 4000

const students = ["John", "Mary", "Jill"]

// Middleware
app.use(bodyParser.json())
app.use("/api/", cors()) //to resolve the XMLHTTPRequest.HandleError when the api request doesn't  go through

// Routes - set up a simple API
app.get("/api/students", (req, res) => {
	return res.json(students)
})

// add a student
app.post("/api/students", (req, res) => {
	students.push(req.body.student) // add a student from the incoming request object
	return res.json(req.body.student) // print out the
})

app.listen(port, () => {
	console.log(`server is listening on ${port}`)
})
