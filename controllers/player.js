var Player = require('../models/player'); 

// List of all Player
exports.player_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player list'); 
}; 

// for a specific Player. 
exports.player_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player detail: ' + req.params.id); 
}; 

// Handle Player create on POST. 
exports.player_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player create POST'); 
}; 

// Handle Player delete form on DELETE. 
exports.player_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player delete DELETE ' + req.params.id); 
}; 

// Handle Player update form on PUT. 
exports.player_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player update PUT' + req.params.id); 
};  