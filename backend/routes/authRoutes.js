//defines authentication related api endpoints

const express = require("express");  
const router = express.Router();

const {registerUser} = require("../controllers/authController");

router.post("/register", registerUser); // "/api/auth/register"

module.exports = router;
