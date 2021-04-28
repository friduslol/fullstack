const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControler');

// router.get("", userController.getAllUsers);

//for creating a new user in the DB
router.post("/register", userController.registerNewUser);

module.exports = router;