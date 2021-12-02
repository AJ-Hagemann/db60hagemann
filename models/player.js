const mongoose = require("mongoose") 
const playerSchema = mongoose.Schema({ 
    player_name: String,
    player_team: String,
    player_number: 
       {
           type: Number,
           min: [-1, "Player number must be greater than -1"],
           max: [100, "Player number must be less than 100"],
       } 
}) 

module.exports = mongoose.model("player", playerSchema)  