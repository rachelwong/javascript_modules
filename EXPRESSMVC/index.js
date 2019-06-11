const express = require('express')
const bodyParser = require('body-parser')
const app = express() // initialise an instance of the express server
const port = 3000
const router = require('./routes') // need ./ for a file in the current file system
const mongoose = require('mongoose')

// data kept in the connection will be maintained internally
mongoose.connect('mongodb://localhost/contacts', {
  useNewUrlParser: true
})

mongoose.connection.on("error", error => console.log(error))

// view templating (not necessary)
app.set('view engine', 'ejs')
// use bodyParser to accept form data
app.use(bodyParser.urlencoded())
app.use(router)

// set it up to listen when initialising the express server 
app.listen(port, () => {
  console.log("listening")
})