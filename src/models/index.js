const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
 // operatorsAliases: false,
 logging: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

const Category = require('../models/category.model')(sequelize, Sequelize)
const Course = require('../models/courses.model')(sequelize, Sequelize)
const User = require('../models/user.model')(sequelize, Sequelize)
const CourseCategoryMapping = require('../models/course_categories_relation')(sequelize, sequelize)
Course.hasMany(CourseCategoryMapping)
Category.hasMany(CourseCategoryMapping)
// Syncing our database and logging a message to the user upon success
sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created here!`)
  })
module.exports = {
  Course,
  Category,
  User,
  CourseCategoryMapping
}

