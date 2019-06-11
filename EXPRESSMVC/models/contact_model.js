const mongoose = require('mongoose') // bring in mongoose

// package called validator can do data validation
// define the schema for the model
const ContactSchema = new mongoose.Schema({
  name: {
    type: String, // data validation here 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  enquiry: {
    type: String,
    default: "No questions" // even if they provide any data it will just be an empty string
  }
})

// create model
// pass in 1. what I want to call the model, 2. what schema
const ContactModel = mongoose.model('contact', ContactSchema)

module.exports = {
  ContactSchema,
  ContactModel
}