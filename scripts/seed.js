const { Product } = require('../database/models');

const seedProducts = async () => {
  await Product.bulkCreate([
    {
      name: 'Product 1',
      price: 29.99,
      image: '/images/product1.jpg',
      description: 'This is the first product.',
      category: 'Category A',
    },
    {
      name: 'Product 2',
      price: 49.99,
      image: '/images/product2.jpg',
      description: 'This is the second product.',
      category: 'Category B',
    },
    {
      name: 'Product 3',
      price: 19.99,
      image: '/images/product3.jpg',
      description: 'This is the third product.',
      category: 'Category A',
    },
  ]);
};

seedProducts();
