var express = require('express');
const player_controllers= require('../controllers/player');
var router = express.Router();


/* GET players */
router.get('/', player_controllers.player_view_all_Page );


/* GET detail player page */ 
router.get('/detail', player_controllers.player_view_one_Page);

/* GET create costume page */ 
router.get('/create', player_controllers.player_create_Page); 

/* GET create update page */ 
router.get('/update', player_controllers.player_update_Page); 

/* GET create player page */ 
router.get('/delete', player_controllers.player_delete_Page); 




module.exports = router;