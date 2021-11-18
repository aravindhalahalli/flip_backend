const express = require("express");
const { sign } = require("jsonwebtoken");
const { requireSignin } = require("../../common-middleware");
const { sigup, signin, signout } = require("../../controller/admin/auth");
const { validationSignUpRequest, isRequestValidated, validationSignInRequest } = require("../../validators/auth");

const router = express.Router();


//userLogin/Register-Routes
router.post("/admin/signup", validationSignUpRequest, isRequestValidated, sigup)
router.post("/admin/signin", validationSignInRequest, isRequestValidated, signin)
router.post("/admin/signout", signout)

module.exports = router;
