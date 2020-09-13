require('dotenv').config();

module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'test_product_db',
    username: 'test_user',
    password: 'akira',
    host: '192.168.33.18',
    dialect: 'postgres'
  },

  // test: {
  //   database: 'book_test',
  //   username: 'steven',
  //   password: null,
  //   host: '127.0.0.1',
  //   dialect: 'postgres'
  // },

  production: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  }
};
