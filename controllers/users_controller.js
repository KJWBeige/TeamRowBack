//Brian will setup "structure" controller
var User = require('../models/user.js')
var mongoose = require('mongoose')

//display all users
function index(req, res) {
	User.find({}, function(err, users){
		if (err) console.log(err)
		res.json(users)
	})
}

//create - Nick
function create(req, res){
  var user = new User()
  user.user_name = req.body.user_name
  user.email = req.body.email
  user.name = req.body.name
  user.age = req.body.age

  user.save(function(err){
    if (err) throw err
    res.json({success: true, message: "User created!"})
  })
}
//read - Sam
function show(req, res) {
	User.find({email: req.params.email}, function(err, user){
		if (err) console.log(err)
		res.json(user)
	})
}

//update - Brian
function update(req, res) {
	User.findOneAndUpdate({email: req.params.email}, {age: req.body.age}, function(err, user){
		if (err) console.log(err)
		res.json(user)
	})
}

//destroy - Kevin
function destroy (req, res){
  User.findOneAndRemove({_id: req.params.user_id}, function(err, user){
    if(err) res.send(err)
    res.json({success: true, message: "user: " + user.user_name + "deleted!"})
  })
}

module.exports = {
  index : index
, create: create
, show: show
, update: update
, destroy: destroy
}
