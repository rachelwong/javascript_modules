var express = require('express');
const {
  UserModel
} = require('../models/user')
const passport = require('passport') // use this to perform the actual authentication
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', (req, res) => {
  const newUser = new UserModel({
    email: req.body.email
  })
  // pass in a new instance of User model into register method
  // password is passed in second paramter instead of just added ot usermode. 
  // password can't be stored plaintext in model. Password needs to be hashed and stored it in the usermodel.
  UserModel.register(newUser, req.body.password, err => {
    if (err) {
      
    }
  })
})

module.exports = router;