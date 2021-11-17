var express = require('express');
const player_controllers= require('../controllers/player');
var router = express.Router();


/* GET players */
router.get('/', player_controllers.player_view_all_Page );


/* GET detail player page */ 
router.get('/detail', player_controllers.player_view_one_Page);

/* GET create costume page */ 
router.get('/create', player_controllers.player_create_Page); 



module.exports = router;