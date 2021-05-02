const express = require('express');
const router = express.Router();
const channelController = require('../controllers/channelController');

router.get("", channelController.getAllChannels);
router.get("/schedule/:channelId", channelController.getSingleDaySchema);
router.get("/categories", channelController.getCategories);
router.get("/channel/:channelId", channelController.getChannelById);
router.get("/programs/:channelId", channelController.getProgramsForChannel);
router.get("/programs/category/:programcategoryid", channelController.getProgramsForCategory);


module.exports = router;
