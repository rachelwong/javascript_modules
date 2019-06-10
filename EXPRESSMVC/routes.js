const express = require('express')
const router = express.Router() // obtain an instance of the router module within express framework
const ContactController = require('./controllers/contact_controller') // this is following rails convention for class
// can also be written as const {newContact, create} = require(./controllers/contact_control)

// instead of using app.get, we use router.get
// router is a middleware in itself

// ROUTING
router.get('/', ContactController.newContact) // we dont' want to call it immediatley so we don't add the () i.e.ContactControlle.newContact() 
// currently this is saying, get me the entire function. passing it to get or post
// don't do it right now, do it when you get or post

router.post('/contacts', ContactController.create)

module.exports = router // exports router