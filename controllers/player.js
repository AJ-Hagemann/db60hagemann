var player = require('../models/player'); 

// List of all Costumes 
exports.player_list = async function(req, res) { 
    try{ 
        thePlayers = await player.find(); 
        res.send(thePlayers); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  

// VIEWS 
// Handle a show all view 
exports.player_view_all_Page = async function(req, res) { 
    try{ 
        thePlayers = await player.find(); 
        res.render('player', { title: 'Player Search Results', results: thePlayers }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// List of all Player
exports.player_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player list'); 
}; 

// for a specific Player. 
exports.player_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player detail: ' + req.params.id); 
}; 

exports.player_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new player(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"player_name":"Lebron James", "player_number":6, "player_team":"Lakers"} 
    document.player_name = req.body.player_name; 
    document.cost = req.body.player_number; 
    document.size = req.body.player_team; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 

// Handle Player delete form on DELETE. 
exports.player_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player delete DELETE ' + req.params.id); 
}; 

// Handle Player update form on PUT. 
exports.player_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Player update PUT' + req.params.id); 
};  