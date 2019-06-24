const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose') // we don't import passport but the strategy
const UserSchema = new mongoose.Schema({})
const UserModel = mongoose.model('User', UserSchema)

// attach passport strategy to the user model
// .plugin is a mongoose method. it can be for any functionality that is a mongoose extension. 
UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
})

module.exports = {
  UserSchema,
  UserModel
}