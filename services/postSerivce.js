const { Category, BlogPost, User, PostCategory } = require('../models');

const insert = async (title, content, categoryIds, userId) => {
  const create = await BlogPost.create({ title, content, userId });
  await PostCategory.create({ postId: create.dataValues.id, categoryId: categoryIds });
  return create;
};

const findAll = async () => {
  // Funcão inspirada no codigo do Gui Gomes e feita com ajuda dele.
  const posts = await BlogPost.findAll({ include: [
  { model: Category, as: 'categories', through: { attributes: [] } }, { model: User, as: 'user' }], 
  attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'] });
  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({ include: [
  { model: Category, as: 'categories', through: { attributes: [] } }, { model: User, as: 'user' }], 
  attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  where: { id } });
  return post;
};

const update = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const post = await BlogPost.findOne({ include: [
  { model: Category, as: 'categories', through: { attributes: [] } }], 
  attributes: ['title', 'content', 'userId'],
  where: { id } });
  return post;
};

module.exports = {
  insert,
  findAll,
  findById,
  update,
};
