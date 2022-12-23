const router = require("express").Router();
const StrK = process.env.StrK;
const stripe = require("stripe")(StrK);

router.post("/payment", (req,res)=>{
   stripe.charges.create(
      {
         source: req.body.tokenId,
         amount: req.body.amount,
         currency: "usd",
      },
      (stripeErr, stripeRes)=>{
         if(stripeErr){
            res.status(500).json(stripeErr);
         }else{
            res.status(200).json(stripeRes);
         }
      }
   );
});

module.exports = router;