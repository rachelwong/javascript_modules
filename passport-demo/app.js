var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const {
  UserModel
} = require('./models/user')

var app = express();

// sessions middleware
app.use(session({
  // this is the encryption key to encrypt the session ID
  secret: 'These are not the droids you are looking for'
}))

// connect with database 
mongoose.connect('mongodb://localhost/passport-demo', err => {
  // if there was no error, err will be undefined and be falsey
  if (err) {
    console.log('Error connecting to db:', err)
  } else {
    console.log('Connected to db')
  }
})

// middleware, give it a stategy middleware
// create an instance of that strategy middleware that is attached to the user model (through .plugin). Here is a way to store to password
passport.use(UserModel.createStrategy())
passport.serializeUser(UserModel.serializeUser()) // when we convert password to a text
passport.deserializeUser(UserModel.deserializeUser())
// this is what you need to call in order to save a user and in order to retrieve information from user 

//initialise passport middleware to use the session
app.use(passport.initialize())
app.use(passport.session())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;