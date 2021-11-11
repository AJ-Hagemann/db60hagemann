var express = require('express'); 
var router = express.Router(); 

// Require controller modules. 
var api_controller = require('../controllers/api'); 
var player_controller = require('../controllers/player'); 

/// API ROUTE /// 

// GET resources base. 
router.get('/resource', api_controller.api); 

/// Player ROUTES /// 

// POST request for creating a Player.  
router.post('/player', player_controller.player_create_post); 

// DELETE request to delete Player. 
router.delete('/player/:id', player_controller.player_delete); 

// PUT request to update Player. 
router.put('/player/:id', player_controller.player_update_put); 

// GET request for one Player. 
router.get('/player/:id', player_controller.player_detail); 

// GET request for list of all Player items. 
router.get('/player', player_controller.player_list); 

module.exports = router;  