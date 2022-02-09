const { Category } = require('../models');

const insert = async (title, content, categoryIds) => {
  const create = await Category.create({ title, content, categoryIds });
  return create;
};

module.exports = {
  insert,
};