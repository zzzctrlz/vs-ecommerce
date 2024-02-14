const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/stripeRoute");


//initialize
const app = express();
app.use(express.json()); //allows parsing post requests using JSON
app.use(express.urlencoded({extended: false})); //parse url encoded bodies
app.use(cors());   
app.listen(process.env.PORT || 5000, ()=> {console.log('backend server is running')});

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
   .then(()=> {console.log('db connection successful')})
   .catch((err)=> {console.log(err)});


//declare routes
   app.use("/api/auth", authRoute);
   app.use("/api/users", userRoute);
   app.use("/api/products", productRoute);
   app.use("/api/carts", cartRoute);
   app.use("/api/orders", orderRoute);
   app.use("/api/checkout", stripeRoute);
   