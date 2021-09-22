const express = require("express");
const { sign } = require("jsonwebtoken");
const { sigup, signin, requireSignin } = require("../controller/auth");

const router = express.Router();


//userLogin/Register-Routes
router.post("/signup",sigup)
router.post("/signin", signin);
router.post("/profile", requireSignin, (req,res)=>{
    res.status(200).json({user:"profile"})
})

module.exports = router;
