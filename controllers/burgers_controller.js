var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")



 router.get("/", function(req, res) {
   res.redirect("/burgers");
 });
 router.get("/burgers", function (req, res){
   burger.selectAll(function (burgerData) {
     res.render("index", {burger_data: burgerData});
   });
 });
  
  router.post("/burgers/create", function(req, res) {
    burger.create(["burger", "devoured!"], [req.body.burger, req.body.devoured], function(result) {
      
      res.json({ id: result.insertId });
    });
  });
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id =  " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({devoured: req.body.devoured}, condition, function(result) {
      if (result.changedRows == 0) {
      
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


 module.exports = router;