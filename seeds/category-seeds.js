const { Category } = require('../models');

const categoryData = [
  {
    categ_name: 'Shirts',
  },
  {
    categ_name: 'Shorts',
  },
  {
    categ_name: 'Music',
  },
  {
    categ_name: 'Hats',
  },
  {
    categ_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
