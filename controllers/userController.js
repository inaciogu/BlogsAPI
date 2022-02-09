const jwt = require('jsonwebtoken');
const Users = require('../services/userService');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await Users.createUser(displayName, email, password, image);
    const user = await User.findOne({ where: { email } });
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const login = async (req, res) => {
  const { email } = req.body;
    
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  res.status(200).json({ token });
};

const findUsers = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

module.exports = {
  createUser,
  login,
  findUsers,
};