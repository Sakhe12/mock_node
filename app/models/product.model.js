const sql = require("./db");

const Products = function (products) {
    this.games = products.games;
    this.price = products.price;
};

Products.create = (newProducts, result) => {
    
}