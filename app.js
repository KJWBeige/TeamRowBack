// Sam does this

var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    app = express(),
    mongoose = require('mongoose'),
    port 		= process.env.PORT || 3000,
    userRoutes 	= require('./routes/user_routes.js')

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

// user routes
app.use('/users', userRoutes)

// set port
app.listen(port)
console.log('Server started on', port)
