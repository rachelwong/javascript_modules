const express = require('express')
const bodyParser = require('body-parser')
const app = express() // initialise an instance of the express server
const port = 3000

// view templating (not necessary)
app.set('view engine', 'ejs')
// use bodyParser to accept form data
app.use(bodyParser.urlencoded())

const contacts = []

// Routing
app.get('/', function (req, res) {
  res.render('layouts/main', {
    view: 'contact',
    title: 'contact us'
  })
})

app.post('/contacts', (req, res) => {
  // let contact = {
  //   email: req.body.email,
  //   name: req.body.name
  // }

  let {
    name,
    email
  } = req.body // takes req.body and extract a name and email property if exsits and createa  name and email variable with the values of those properties (destructuring)

  let contact = {
    name,
    email
  } // create a new variable using the destructure data 

  contacts.push(contact)
  console.log("contacts:", contacts)
  res.render('layouts/main', {
    view: 'success',
    title: 'Thanks!'
  })
})
// set it up to listen when initialising the express server 
app.listen(port, () => {
  console.log("listening")
})