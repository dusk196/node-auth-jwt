require('dotenv').config();

var { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
  "development": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z',
      dateStrings: true,
      typeCast: true
    },
    timezone: '+05:30'
  },
  "production": {
    username: DB_PASSWORD,
    password: DB_PASSWORD,
    database: DB_PASSWORD,
    host: DB_PASSWORD,
    dialect: "mysql",
    dialectOptions: {
      timezone: 'Z',
      dateStrings: true,
      typeCast: true
    },
    timezone: '+05:30'
  }
};