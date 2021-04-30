const express = require('express');
const router = express.Router();
const favController = require("../controllers/favController");

router.post("/saveChannel", favController.saveChannel);
router.get("/faves/:userId", favController.getfaves);

module.exports = router;