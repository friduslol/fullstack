const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControler');

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);

module.exports = router;