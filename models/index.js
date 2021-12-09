const Sequelize = require('sequelize');

const hive        = require('./hive');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize    = sequelize;

db.hive         = hive;
hive.init(sequelize);
hive.associate(db);

module.exports = db;
