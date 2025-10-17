const express = require("express");
const router = express.Router();
const { register, token } = require("../controllers/authController");

// register expects JSON body { name, email, password }
router.post("/register", register);

// token expects form urlencoded { username, password }
router.post("/token", token);

module.exports = router;