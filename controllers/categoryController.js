const category = require('../services/categoryService');

const insert = async (req, res) => {
  const { name } = req.body;
  const create = await category.insert(name);
  res.status(201).json(create);
};

const findAll = async (req, res) => {
  const categories = await category.find();
  res.status(200).json(categories);
};

module.exports = {
  insert,
  findAll,
};