const jwt = require('jsonwebtoken');
const Users = require('../services/userService');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await Users.createUser(displayName, email, password, image);
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { email } }, secret, jwtConfig);

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
  const users = await Users.findUsers();
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const foundUser = await Users.findById(id);
  res.status(200).json(foundUser);
};

module.exports = {
  createUser,
  login,
  findUsers,
  findById,
};