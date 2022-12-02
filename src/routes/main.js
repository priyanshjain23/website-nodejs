const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "hbs");

app.use("/static", express.static("public"));
hbs.registerPartials("views/partials");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/ff", function (req, res) {
  res.sendFile(__dirname + "index");
});

let URI =
  "mongodb+srv://priyansh_23:priyansh123@cluster0.010y1q5.mongodb.net/?retryWrites=true&w=majority";
let connectdb = async () => {
  try {
    let con = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database is connected with the given URI ");
  } catch (err) {
    console.log(err);
  }
};

connectdb();

let schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: false,
  },
  pass: {
    type: String,
    required: true,
    unique: false,
  },
});

let Note = new mongoose.model("Student", schema);

saveDoc = () => {
  app.get("/ff", function (req, res) {
    res.sendfile(__dirname + "index");
  });

  app.post("/ff", function (req, res) {
    let newNote = new Note({
      id: req.body.id,
      pass: req.body.pass,
    });
    newNote.save();
    res.redirect("/");
  });
};

saveDoc();

app.listen(8080, function () {
  console.log("server connected");
});

app.get("/gettinghere", (req, res) => {
  res.render("gettinghere");
});
app.get("/gettingaround", (req, res) => {
  res.render("gettingaround");
});
app.get("/accomodation", (req, res) => {
  res.render("accomodation");
});
app.get("/airportaccess", (req, res) => {
  res.render("airportaccess");
});

// //jshint version:6
