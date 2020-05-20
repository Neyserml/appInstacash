const express = require("express");
const chalk = require("chalk");
const APIError = require("./APIError");
const bodyParser = require("body-parser");
const httpStatus = require("http-status");
const cors = require("cors");
const pathToRegexp = require("path-to-regexp");
const printStatus = require("./printStatus");
const routes = require("./routes");
const db = {};

db["campaingns"] = require("./mockup/consultCampaign");
db["simulation"] = require("./mockup/simulation");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    keepExtensions: true,
    uploadDir: __dirname + "/media",
    limit: 10000000, // 10M limit
    defer: true,
    extended: true,
  })
);

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`The mockup services are deployed in::`);
  console.log();
  console.log(`  ${chalk.bold("Local:")}           http://localhost:${port}/`);
  console.log();
});

app.get("/", (_req, res) => {
  res.json("Welcome to mockup");
});

app.use(({ path }, res, next) => {
  const routeNames = Object.keys(routes);
  let statusCode = res.statusCode;

  if (!res.capturado) {
    for (let index = 0; index < routeNames.length; index++) {
      const name = routeNames[index];
      const fromPath = pathToRegexp(name);

      if (fromPath.exec(path)) {
        const dataName = routes[name];
        const data = db[dataName];
        if (data) {
          printStatus(path, statusCode);

          return res.json(data);
        }
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;

        res
          .status(statusCode)
          .send(new APIError("", "There is no data for this url"));
        printStatus(path, statusCode);

        return next();
      }
    }

    statusCode = httpStatus.NOT_FOUND;
    res
      .status(statusCode)
      .send(new APIError("", "There is no reference to this url"));
  }
  if (!res.cargando) {
    printStatus(path, statusCode);

    return next();
  }
});

module.exports = app;
