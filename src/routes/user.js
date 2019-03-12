const router = require("express").Router();
const { getAllUsers, insertOneUser } = require("../controllers/user");

router.get("/", getAllUsers);

router.post("/:id", insertOneUser);

module.exports = router;
