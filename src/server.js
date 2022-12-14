const express = require("express");
const hbs = require("hbs");
const app = express();
const routes = require("./routes/main");
const mongoose = require("mongoose");
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");
app.use("/static", express.static("public"));
app.use("", routes);

mongoose.connect("mongodb://localhost:27017/Hireus", () => {
  console.log("database connected");
});
app.listen(process.env.PORT | 8080, () => {
  console.log("server started");
});
