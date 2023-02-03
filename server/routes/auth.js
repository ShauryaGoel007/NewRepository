const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conndb");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("welcome to router home page");
});
//register
router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "please fill the feilds properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "passwords do notmatch" });
    } else {
      const user = new User({ name, email, password, cpassword });
      //password hashing

      await user.save();

      res.status(200).json({ message: "user registred successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "please fill the feilds properly" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const passMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (passMatch) {
        res.status(201).json({ message: "user successfull log ined" });
      } else {
        res.status(201).json({ message: "user error" });
      }
    } else {
      res.status(201).json({ message: "user error" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
