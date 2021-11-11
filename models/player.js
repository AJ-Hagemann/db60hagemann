const mongoose = require("mongoose") 
const playerSchema = mongoose.Schema({ 
 player_name: String, 
 player_team: String, 
 player_number: Number 
}) 

module.exports = mongoose.model("player", 
playerSchema)  