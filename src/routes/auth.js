const express = require("express");
const { sign } = require("jsonwebtoken");
const { sigup, signin } = require("../controller/auth");
const {
  validationSignUpRequest,
  isRequestValidated,
  validationSignInRequest,
} = require("../validators/auth");

const router = express.Router();

//userLogin/Register-Routes
router.post("/signup", validationSignUpRequest, isRequestValidated, sigup)
router.post("/signin", validationSignInRequest, isRequestValidated, signin)

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// })

module.exports = router;
