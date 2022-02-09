const express = require('express');
const user = require('../controllers/userController');
const userValidation = require('../middlewares/validateUser');
const loginValidation = require('../middlewares/validateLogin');
const validateJWT = require('../auth/validateJWT');

const routes = express.Router();

routes.post('/login',
  loginValidation.validateEmail,
  loginValidation.validatePassword,
  userValidation.validateUser,
  user.login);
routes.post('/user', 
userValidation.validateName, 
userValidation.validateEmail, 
userValidation.validatePassword, 
user.createUser);
routes.get('/user', validateJWT, user.findUsers);
routes.get('/user/:id', validateJWT, userValidation.validateUserId, user.findById);

module.exports = routes;