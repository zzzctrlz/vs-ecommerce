//const UserModel = require("../models/UserModel");
const router = require("express").Router();

router.get("/usertest", (req, res) => {
   res.send('test is successful');
});

module.exports = router;