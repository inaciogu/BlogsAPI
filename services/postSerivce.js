const { Category, BlogPost, User, PostCategory } = require('../models');

const insert = async (title, content, categoryIds, userId) => {
  const create = await BlogPost.create({ title, content, userId });
  // Função abaixo foi feita com ajuda do monstro do back end Guilherme Gomes
  await PostCategory.create({ postId: create.dataValues.id, categoryId: categoryIds });
  return create;
};

const findAll = async () => {
  // Funcão inspirada no codigo do Gui Gomes e feita com ajuda dele.
  const posts = await BlogPost.findAll({ include: [
    { model: Category, as: 'categories' }, { model: User, as: 'user' }], 
  attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'] });
  console.log(posts);
  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({ include: [
  { model: Category, as: 'categories' }, { model: User, as: 'user' }], 
  attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  where: { id } });
  return post;
};

module.exports = {
  insert,
  findAll,
  findById,
};