const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongo database");
  })
  .catch((err) => console.log(err));
