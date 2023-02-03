const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

const PORT = process.env.PORT;
const DB = process.env.DATABASE;

// db connection
mongoose.set("strictQuery", true);
require("./db/conndb");

app.use(express.json());

//middleware
const middleware = (req, res, next) => {
  console.log("yoyo middleware");
  next();
};

//routes

app.use(require("./routes/auth"));

// app.get("/", (req, res) => {
//   res.send("hello , welcome to home page");
// });
app.get("/about", middleware, (req, res) => {
  res.send("hello , welcome to about page");
});
app.get("/contact", (req, res) => {
  res.cookie("test", "thapa");
  res.send("hello , welcome to contact page");
});
app.get("/signin", (req, res) => {
  res.send("hello , welcome to signin page");
});
app.get("/signup", (req, res) => {
  res.send("hello , welcome to signup page");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
