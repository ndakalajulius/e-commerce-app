const { DataTypes } = require('sequelize');
const sequelize = require('./index');

// Product Model
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.STRING,
  },
});

// Cart Model
const CartItem = sequelize.define('CartItem', {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

// Sync Models
sequelize.sync({ force: true });

module.exports = { Product, CartItem };
