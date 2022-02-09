const { Category } = require('../models');

const insert = async (name) => {
  const category = await Category.create({ name });
  return category;
};

module.exports = {
  insert,
};