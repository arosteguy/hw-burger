
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();



var router = require("./controllers/burgers_controller.js");

app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(router);
   




app.listen(PORT, function() {
console.log("listening on: http://localhost:" + PORT);
})