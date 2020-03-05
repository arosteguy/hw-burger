var express = require("express");

var routes = require("./controllers/burgers_controller.js");
var exphbs =require ("express-handlebars");

var app = express();




app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

var PORT = process.env.PORT || 3124;
app.listen(PORT, function() {
console.log("listening on: http://localhost:" + PORT);
})



   



