const router = require("express").Router();
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//REGISTER
router.post("/register", async(req, res) => {
   //create new user
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: cryptoJS.AES.encrypt(
         req.body.password,
         process.env.SPW
      ).toString(),
   });
   try{
      //save new user to database
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
   }catch(err){
      res.status(500).json(err);
   }
});

//LOGIN
router.post("/login", async(req, res)=>{
   try{
      //find user based on req username
      const user = await User.findOne({username: req.body.username});
      if(!user){
         return res.status(401).json("Invalid credentials!");
      }
      //compare req password with found user's saved pass
      const originalPassword = cryptoJS.AES.decrypt(
         user.password,
         process.env.SPW
      ).toString(cryptoJS.enc.Utf8);
      if(originalPassword !== req.body.password){
         return res.status(401).json(`Invalid credentials!`);
      }
      //if username and password correct, issue/sign JWT for client authen
      const accessToken = jwt.sign(
         {
            id: user._id,
            isAdmin: user.isAdmin,
         },
         process.env.JWT_SPW,
         {expiresIn: "3d"}
      );
      //destructure user to avoid displaying pass
      const {password, ...others} = user._doc;
      res.status(200).json({...others, accessToken});
   }catch(err){
      res.status(500).json(err);
   }
});

module.exports = router;