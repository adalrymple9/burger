var express = require("express");
var routes = require("./controllers/burgers_controller.js");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 3000;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static("public"));
app.use("/burgers", routes);





app.listen(port);
