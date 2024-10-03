const { Sequelize } = require('sequelize');

// SQLite Database Configuration
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './ecommerce.sqlite',
});

module.exports = sequelize;
