var mongoose = require('mongoose');

//Nick will setup

//creates a user schema
var userSchema = new mongoose.Schema({
  user_name: String,
  email: {type: String, require: true, unique: true},
  name: String,
  age: Number
})

//creates a new method to display the user's info in the console
userSchema.methods.info = function(){
  console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old. My user name is ' + this.user_name + '.')
}

//creates a new variable for the user schema
var User = mongoose.model('User', userSchema)

//exports the model module to use in users_controller.js
module.exports = User
