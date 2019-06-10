const express = require('express')
const router = express.Router() // obtain an instance of the router module within express framework

const contacts = []

// instead of using app.get, we use router.get
// router is a middleware in itself

// Routing
router.get('/', function (req, res) {
  res.render('layouts/main', {
    view: 'contact',
    title: 'contact us'
  })
})

router.post('/contacts', (req, res) => {

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

module.exports = router // exports router