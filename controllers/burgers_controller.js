var express = require("express");
var burger = require("../models/burger.js")

var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
        if (!req.xhr) {
            res.render("burgers/index", { burgers: data });
        } else {
            res.render("partials/burgers/all", { burgers: data, layout: false });
        }
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
