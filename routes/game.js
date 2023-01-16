const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, gameController.getGame);

module.exports = router;
