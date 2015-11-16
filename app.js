// Sam does this

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    app = express(),
    mongoose = require('mongoose'),
    port 		= process.env.PORT || 3000,
    userRoutes 	= require('./routes/user_routes.js'),
    ejs         = require('ejs'),
    ejsLayouts  = require('express-ejs-layouts')

    app.set('view engine', 'ejs')

    app.use(ejsLayouts)

// establish connection to mongo database
mongoose.connect('mongodb://localhost/users')

// logs requests
app.use(logger('dev'))

// makes json objects available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// root route
app.get('/', function(req, res) {
	res.send("You're in the matrix")
})


app.get(('/about'), function(req, res){
 var collection2 = [
     {name: "About1", email: "lily@gmail.com"},
     {name: "About2", email: "ken@gmail.com"},
     {name: "About3", email: "kate@gmail.com"},
 ]
 //so below, you can direclty type into the 2nd argument what you want to view
 //OR you can create a variable, etc
 var body2 = {
   title: "The About Page",
   message: "Boom Boom Boom!",
   users: collection2
 }
 res.render('about', body2)
})



// user routes
app.use('/users', userRoutes)

// set port
app.listen(port)
console.log('Server started on', port)
