const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  dialectOptions: {connectTimeout: 1000},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
