// entry point and creates a server here
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes') // imports routes 
const port = 3000
const app = express() // creates instance of express in the server

//since this is a JSON API, use the bodyparser.json()
// bodyParser needs to be before use.routes
// we have been posting in the form in the browser, and pass along data as urlencoded. since this is only a json api, the data will be passed be in json format. so in order the json body and make it agailable to the rest of the code, we use bodyparse.json to return a json parser as a middleware.
app.use(bodyParser.json()) // when a post response is done, we want to be able use the data 

// need to use the routes
app.use(router)

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})