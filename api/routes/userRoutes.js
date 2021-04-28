const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControler');

// router.get("", userController.getAllUsers);

// router.get("/whoami", userController.whoami);
router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);

module.exports = router;