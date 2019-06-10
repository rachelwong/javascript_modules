const express = require('express')
const bodyParser = require('body-parser')
const app = express() // initialise an instance of the express server
const port = 3000
const router = require('./routes') // need ./ for a file in the current file system

// view templating (not necessary)
app.set('view engine', 'ejs')
// use bodyParser to accept form data
app.use(bodyParser.urlencoded())
app.use(router)

// set it up to listen when initialising the express server 
app.listen(port, () => {
  console.log("listening")
})