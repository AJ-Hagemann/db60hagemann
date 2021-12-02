var express = require('express');
const player_controllers= require('../controllers/player');
var router = express.Router();



const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl;
    res.redirect("/login"); 
  } 



/* GET players */
router.get('/', player_controllers.player_view_all_Page );


/* GET detail player page */ 
router.get('/detail', player_controllers.player_view_one_Page);

/* GET create plyer page */ 
router.get('/create', secured, player_controllers.player_create_Page);  

/* GET update player page */ 
router.get('/update', secured, player_controllers.player_update_Page); 

/* GET create player page */ 
router.get('/delete', secured, player_controllers.player_delete_Page);




module.exports = router;