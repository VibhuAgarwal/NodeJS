const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", (req, res, next) => {
//   console.log("This always runs");
//   res.status(200).send("<h1>This alway runs</h1>");
//   next();
// });

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  const { body } = req;
  console.log(req.body.title);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.status(200).send("<h1>Hello from express</h1>");
});

const port = process.env.PORT || 3000;

app.listen(port);
