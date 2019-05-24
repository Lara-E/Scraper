var express = require("express");
var mongoose = require("mongoose");
// var axios = require("axios");
// var cheerio = require("cheerio");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});



