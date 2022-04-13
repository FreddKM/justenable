require("dotenv").config();

const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const path = require("path");
const app = express();

app.use(compression());
app.use(helmet());
app.use(logger("dev"));
// Serve only the static files form the dist directory

app.use(express.static(__dirname + "/dist/just-enable"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/just-enable/index.html"));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
