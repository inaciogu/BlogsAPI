const express = require('express');
const user = require('../controllers/userController');
const userValidation = require('../middlewares/validateUser');
const loginValidation = require('../middlewares/validateLogin');

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

module.exports = routes;