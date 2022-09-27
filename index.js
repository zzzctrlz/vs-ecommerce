const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/orderRoute");
const cors = require("cors");


//initialize
const app = express();
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
   .then(()=> {console.log('db connection succesful')})
   .catch((err)=> {console.log(err)});


   app.listen(process.env.PORT || 5000, ()=> {console.log('backend server is running')});


   app.use("/api/users", userRoute);

   app.get("/api/test", () => {
      console.log('test successful');
   });