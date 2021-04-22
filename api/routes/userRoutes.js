const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControler');

router.get("", userController.getAllUsers);

module.exports = router;