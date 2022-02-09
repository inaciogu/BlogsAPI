const express = require('express');
const user = require('../controllers/userController');
const post = require('../controllers/postController');
const category = require('../controllers/categoryController');
const userValidation = require('../middlewares/validateUser');
const loginValidation = require('../middlewares/validateLogin');
const postValidation = require('../middlewares/validatePost');
const categoryValidation = require('../middlewares/validateCategory');
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

routes.post('/categories', categoryValidation.validateName, validateJWT, category.insert);

routes.get('/categories', validateJWT, category.findAll);

routes.post('/post', 
validateJWT, 
postValidation.validatePost, 
postValidation.validateCategory, 
post.insert);

routes.get('/post', validateJWT, post.findAll);

routes.get('/post/:id', 
validateJWT, 
postValidation.validateId, 
post.findById);

routes.put('/post/:id', 
validateJWT, 
postValidation.authCategory, 
postValidation.validatePost, 
postValidation.authUser, 
post.update);

module.exports = routes;