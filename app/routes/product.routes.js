module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", products.create);
  
    router.get("/", products.findAll);
  
    router.get("/prices", products.findAllPrices);
  
    router.get("/:id", products.findOne);
  
    router.put("/:id", products.update);
  
    router.delete("/:id", products.delete);
  
    // Delete all Tutorials
    router.delete("/", products.deleteAll);
  
    app.use('/api/products', router);
  };