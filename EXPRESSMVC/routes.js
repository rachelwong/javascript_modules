const express = require('express')
const router = express.Router() // obtain an instance of the router module within express framework
const {
  newContact,
  create,
  index,
  allEnquiries,
} = require('./controllers/contact_controller') // this is following rails convention for class
// can also be written as const ContactController = require(./controllers/contact_control)

// instead of using app.get, we use router.get
// router is a middleware in itself

// ROUTING
router.get('/', newContact) // we don't want to call it immediately so we don't add the () i.e.ContactController.newContact() 
// currently this is saying, get me the entire function. passing it to get or post
// don't do it right now, do it when you get or post

router.post('/contacts', create)
router.get('/contacts', index)
router.get('/enquiries', allEnquiries)
module.exports = router // exports router