const express = require('express');
const router = express.Router();
const favController = require("../controllers/favController");

router.post("/saveFave", favController.saveChannel);
router.get("/faves/:userId", favController.getfaves);
router.get("/getfavePrograms/:userId", favController.getfavePrograms);
router.delete(`/faves`, favController.removeFave);


module.exports = router;