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
