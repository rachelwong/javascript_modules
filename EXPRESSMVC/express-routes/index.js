// Configure Express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = require('./routes')

app.use(router)

// Configure MongoDB connection
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017"
let ObjectID = require('mongodb').ObjectID
const mongoOptions = {
  useNewUrlParser: true
}

MongoClient.connect(url, mongoOptions, (err, db) => {
  var dbase = db.db("crud_mongodb")
  if (err) return console.log(err)
  app.listen(port, () => {
    console.log("Listening on port 3000!")
  })
})

// configure bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))