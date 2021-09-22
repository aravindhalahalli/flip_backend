const express = require("express");
const { sign } = require("jsonwebtoken");
const { sigup, signin } = require("../../controller/admin/auth");

const router = express.Router();


//userLogin/Register-Routes
router.post("/admin/signup", sigup)
router.post("/admin/signin", signin);

// router.post("/profile", requireSignin, (req,res)=>{
//     res.status(200).json({user:"profile"})
// })

module.exports = router;
