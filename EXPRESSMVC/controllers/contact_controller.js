const {
  ContactModel
} = require('../models/contact_model') // destructure becasue the export is an object
// we dont' need to require schema because we are not setting up any relationships here

// no requires here
// decouple logic from express. Apart from res.render, the contact controller is largely separate from express
const contacts = [] // moved from routes
// don't need to export contacts array it is used internally by the methods in the controller
// contacts array is protected by the methods

let newContact = (req, res) => {
  res.render('layouts/main', {
    view: 'contact',
    title: 'contact us'
  })
}

let index = (req, res) => {
  // return contacts promise because there's more than one
  ContactModel.find().then(contacts => {
    res.render('layouts/main', {
      view: 'contacts',
      title: 'All Contacts',
      contacts
    })
  }).catch(err => {
    res.status(500).send(`Error: ${err}`) // if promise rejects
  })
}

let allEnquiries = (req, res) => {
  ContactModel.find().then(contacts => {
    res.render('layouts/main', {
      view: 'enquiries',
      title: 'Show All Enquiries',
      contacts
    }).catch(err => {
      res.status(500).send()
    })
  })
}

// create a new contact
let create = (req, res) => {
  // creates a contact object
  let {
    name,
    email,
    enquiry
  } = req.body // takes req.body and extract a name and email property if exsits and createa  name and email variable with the values of those properties (destructuring)

  let contact = {
    name,
    email,
    enquiry
  } // create a new variable using the destructure data 

  // to create instance of our model. pass in the contact object that is created
  // returns a promise here
  ContactModel.create(contact).then(contact => {
    res.render('layouts/main', {
      view: 'success', // name of the ejs file in views > layouts
      title: 'Thanks!' // the <title> to be displayed on the ejs file
    })
  }).catch(err => {
    res.status(500).send(`Error: ${err}`) // if promise rejects
  })
  // contacts.push(contact)
  // console.log("contacts:", contacts)
}

// export more than one thing - both functions newContact and create
module.exports = {
  newContact,
  create,
  index,
  allEnquiries
}