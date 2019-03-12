const express = require("express");
require("envdotjson").load(); // Load env settings from env.json
require("express-async-errors"); // Give all async/await function a try / catch block
const connectDB = require("./utils/connectDB"); // Mongodb connection setting
const logger = require("./utils/logger"); // Format logging
const routes = require("./routes");
// 3RD package
const helmet = require("helmet"); // Protect header info and so on.
const morgan = require("morgan"); // Http request logger service

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(routes);
app.use(helmet());
app.use(morgan("tiny"));

// Start app
connectDB()
  .then(() => {
    logger.info("DB Connect successfully!");
    app.listen(PORT, () => {
      logger.info("App start listening!");
    });
  })
  .catch(ex => {
    logger.error(ex.message);
  });
