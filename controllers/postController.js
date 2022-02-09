const post = require('../services/postSerivce');

const insert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const createPost = await post.insert(title, content, categoryIds, id);
  res.status(201).json({ id: createPost.id, userId: id, title, content });
};

const findAll = async (req, res) => {
  const users = await post.findAll();
  console.log(users);
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const foundPost = await post.findById(id);
  res.status(200).json(foundPost);
};

const update = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const updatePost = await post.update(title, content, id);
  res.status(200).json(updatePost);
};

module.exports = {
  insert,
  findAll,
  findById,
  update,
};