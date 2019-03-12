const userServices = require("../services/user");

const getAllUsers = async (req, res) => {
  const users = await userServices.getAll();
  console.log(users);
  res.send(users);
};

const insertOneUser = async (req, res) => {
  const user = await userServices.insertOne();
  console.log(user);
  res.send(user);
};

module.exports = {
  getAllUsers,
  insertOneUser
};
