const { Category } = require('../models');

const validatePost = (req, res, next) => {
  const { title, content } = req.body;

  if (!title) return res.status(400).json({ message: '"title" is required' });

  if (!content) return res.status(400).json({ message: '"content" is required' });

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds || !categoryIds.length) {
    return res.status(400).json({ message: '"categoryId" is required' });
  }

  const categories = await Category.findAll();

  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validatePost,
  validateCategory,
};