// dependencies
var express = require("express");

// use Router method for controlling routes
var router = express.Router();
// allow access to burger.js ORM
var burger = require("../models/burger.js");

// get routes
router.get("/", function(req, res) {
    res.redirect("/burgers");
});
// get all burgers from mysql database
router.get("/burgers", function(req, res) {
    // sequelize to get all burgers data
    db.sequelBurger.findAll().then(function(allBurger) {
        console.log(allBurger);
        // create variable to pass into handlebars
        var handleBurger = { burger: allBurger };
        return res.render("index", handleBurger);

    });
});

// new burger post route
router.post("/burgers/create", function(req, res) {
    // sequelize create new burger
    db.sequelBurger.create({
            burger_name: req.body.burger_name
        })
        .then(function(allBurger) {
            console.log(allBurger);
            res.redirect("/");
        });
});

// updating current burger post put route
router.put("/burgers/update", function(req, res) {
            // sequelize update burger status 
            db.sequelBurger.update({
                    devoured: true
                }, 
                	{
                    where: {
                        id: req.body.burger_id
                    }
                }
                ).then(function(allBurger) {
                    console.log(allBurger);
                    res.redirect("/");
                
         	});	

});

module.exports = router;
