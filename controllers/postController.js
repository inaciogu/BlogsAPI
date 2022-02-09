const post = require('../services/postSerivce');

const insert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const createPost = await post.insert(title, content, categoryIds, id);
  res.status(201).json({ id: createPost.id, userId: id, title, content });
};

const findAll = async (req, res) => {
  const users = await post.findAll();
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const foundPost = await post.findById(id);
  res.status(200).json(foundPost);
};

module.exports = {
  insert,
  findAll,
  findById,
};