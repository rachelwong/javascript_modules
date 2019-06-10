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

let create = (req, res) => {
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
}

// export more than one thing - both functions newContact and create
module.exports = {
  newContact,
  create
}