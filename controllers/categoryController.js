const category = require('../services/categoryService');

const insert = async (req, res) => {
  const { name } = req.body;
  const create = await category.insert(name);
  res.status(201).json(create);
};

module.exports = {
  insert,
};