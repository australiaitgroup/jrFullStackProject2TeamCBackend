const mongoose = require("mongoose");

module.exports = () => {
  const { DB_HOST, DB_DATABASE, DB_PORT } = process.env;

  let connectionStr = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  console.log(connectionStr);
  return mongoose.connect(connectionStr);
};
