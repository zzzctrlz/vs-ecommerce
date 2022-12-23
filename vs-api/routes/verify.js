const jwt = require("jsonwebtoken");

//main function for verifying requester's JWT
const verifyToken = (req, res, next) => {
   //check for auth header
   const authHeader = req.headers.token;
   if(authHeader){
   //actual token is 2nd word separated by spaces
   //verify the token using secret key shared by issuer
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SPW, (err, user)=>{
         if(err) return res.status(403).json("token invalid");
         //if token valid, jwt.verify returns user. assign 
         //returned user to req user property
         //call next middleware
         req.user = user;
         next();
      });
   } else{
      return res.status(401).json("you aren't authenticated! no token");
   }
};

//verify JWT and check authorization (user id = param id?
// or user is admin?
const verifyTokenAndAuthorization = (req, res, next)=>{
   verifyToken(req, res, ()=>{
      if(req.user.id ===req.params.id || req.user.isAdmin){
         next();
      }else{
         res.status(403).json("you are not allowed to do that! Authorization");
      }
   });
};

//verify token and check if admin
const verifyTokenAndAdmin = (req, res, next)=>{
   verifyToken(req, res, ()=>{
      if(req.user.isAdmin){
         next();
      }else{
         res.status(403).json("you are not allowed to do that! Admin");
      }
   });
};

module.exports={
   verifyToken,
   verifyTokenAndAuthorization,
   verifyTokenAndAdmin,
};