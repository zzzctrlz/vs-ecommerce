const router = require("express").Router();
//const SecStrKey = process.env.SEC_STR_KEY;
const stripe = require("stripe")(process.env.SEC_STR_KEY);

router.post("/payment", (req,res)=>{
   stripe.charges.create(
      {
         source: req.body.tokenId,
         amount: req.body.amount,
         currency: "usd",
      },
      (stripeErr, stripeRes)=>{
         if(stripeErr){
            console.log('stripeErr');
            res.status(500).json(stripeErr);
         }else{
            res.status(200).json(stripeRes);
         }
      }
   );
});

module.exports = router;