module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });
  PostCategory.associate = (models) => {
     models.Category.belongsToMany(models.BlogPost, {
      as: 'categories', foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory,
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory,
    });
  };
  return PostCategory;
};