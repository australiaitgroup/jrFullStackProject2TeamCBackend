const User = require("../models/user");

const getAll = async () => {
  const result = await User.find({});
  return result;
};

const insertOne = async () => {
  const user = new User({
    name: "test1",
    password: "test1",
    first_name: "Evelyn",
    last_name: "Chu"
  });
  const result = await user.save();
  return result;
};

module.exports = {
  getAll,
  insertOne
};
