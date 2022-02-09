const { Category, BlogPost } = require('../models');

const validatePost = (req, res, next) => {
  const { title, content } = req.body;

  if (!title) return res.status(400).json({ message: '"title" is required' });

  if (!content) return res.status(400).json({ message: '"content" is required' });

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const categories = await Category.findAll({ where: { id: categoryIds } });

  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

const validateId = async (req, res, next) => {
  const { id } = req.params;

  const postExists = await BlogPost.findByPk(id);

  if (!postExists) return res.status(404).json({ message: 'Post does not exist' });

  next();
};

module.exports = {
  validatePost,
  validateCategory,
  validateId,
};