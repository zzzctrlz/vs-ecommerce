const stripe = require('stripe')('sk_test_51MZNj8KBBl0FI90RHjLR4LGWH8I5AcDWOTpA96PdjDCKg8o01GVLxOqheY03xQC1wtPLQegiW0i5NV9cyJCNn5Oo00JOuTv8xs');
const {
    verifyToken,
 } = require("./verify");

 const router = require("express").Router();

 const SUCCESS = 'http://localhost:3000/success';
 const FAILURE = 'http://localhost:3000/'

 router.post('/create-checkout-session', async(req, res)=>{
    //console.log(req.body.cartArray);
    const cartArray = JSON.parse(req.body.cartArray);
    //console.log(`cart array: ${cartArray}`);
    const session = await stripe.checkout.sessions.create({
        line_items: cartArray,
        mode: 'payment',
        success_url: SUCCESS,
        cancel_url: FAILURE,
    });

    res.redirect(303, session.url);
 });


 module.exports = router;