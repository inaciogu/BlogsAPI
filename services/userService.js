const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  console.log(user);
  return user;
};

const findUsers = async () => {
  const users = await User.findAll();
  return users;
};

const findById = async (id) => {
  const foundUser = await User.findByPk(id);
  return foundUser;
};

module.exports = {
  createUser,
  findUsers,
  findById,
};