const router = require("express").Router();
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//REGISTER

router.post("/register", async(req, res) => {
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
         req.body.password,
         process.env.SPW
      )
   });
});