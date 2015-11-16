//Brian will setup "structure" controller

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

//update - Brian

//destroy - Kevin
function destroy (req, res){
  User.findOneAndRemove({_id: req:params.user_id}, function(err, user){
    if(err) res.send(err)
    res.json({success: true, message: "user: " + user.user_name + "deleted!"})
  })
}

module.exports = {

  ,destroy: destroy
}
