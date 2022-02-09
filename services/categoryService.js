const { Category } = require('../models');

const insert = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const find = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  insert,
  find,
};