//kevin to finish routes
var usersController = require('../controllers/users_controller.js')
      ,express     = require('express')
    ,userRoutes    = express.Router()


userRoutes.route('/')
  .get(usersController.index)
  .post(usersController.create)

userRoutes.route('/user_id')
  .get(usersController.show)
  .delete(usersController.destroy)
  .put(usersController.update)

module.exports = userRoutes
