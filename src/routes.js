const router = require("express").Router();
const userRoute = require("./routes/user");

router.get("/", (req, res, next) => {
  res.send("Welcome to booking app API!");
});

router.use("/api/user", userRoute);

module.exports = router;
