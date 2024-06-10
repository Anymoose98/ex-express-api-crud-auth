const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/register.js");
const validator = require('../middlewares/validator.js');
const { registerBody, loginBody } = require('../validations/register.js'); // Assuming you have defined these schemas

// Register
router.post('/register', validator(registerBody), register);

// Login
router.post('/login', validator(loginBody), login);

module.exports = router;