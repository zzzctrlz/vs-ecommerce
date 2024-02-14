const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
   {
      title: {type:String, required:true, unique:true},
      desc: {type:String, required:true},
      img: {type:String, required:true},
      size: {type:Array},
      color: {type:Array},
      price:{type:Number, required:true},
      inStock: {type: Boolean, default: true},
      cat: {type:Array},
      stripeId: {type:String, required:true, unique:true},
   },
   {timestamps: true}
);

/*template
{
"title" : "hat 2",
"desc": "hat with 2",
"img": "https://i.imgur.com/N8JBDIh.jpeg",
"size": ["oneSize"],
"color": ["red", "black", "white"],
"price": 20,
"inStock": true,
"cat": ["men", "women", "other", "child"],
stripeId: ""
}
*/
module.exports = mongoose.model("Product", ProductSchema);