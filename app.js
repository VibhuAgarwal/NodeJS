const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In another middleware");
  res.status(200).send("<h1>Hello from express</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port);
