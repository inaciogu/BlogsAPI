const post = require('../services/postSerivce');

const insert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const createPost = await post.insert(title, content, categoryIds);
  res.status(201).json({ id: createPost.id, userId: id, title, content });
};

module.exports = {
  insert,
};