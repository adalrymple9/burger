var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burger");
});

router.get("/burger", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgerData: data });

    });
});

router.post("/", function(req, res) {
    console.log(req.body.burger_name, req.body.devoured);
    burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }, function(data) {
        res.json(data);
    });
});

router.put("/:id", function(req, res) {
    burger.update({ id: req.params.id }, { devoured: req.body.devoured },
        function(data) {
            res.json(data);
        }
    );
});

router.delete("/:id", function(req, res) {
    burger.delete({ id: req.params.id }, function() {
        res.end();
    });
});



module.exports = router;
