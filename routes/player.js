var express = require('express');
const player_controllers= require('../controllers/player');
var router = express.Router();


/* GET players */
router.get('/', player_controllers.player_view_all_Page );

module.exports = router;