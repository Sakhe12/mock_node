const sql = require("./db");

const Products = function (products) {
    this.games = products.games;
    this.price = products.price;
};

Products.create = (newProducts, result) => {
    sql.query("insert into products set ?", newTutorial, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created products: ", { id: res.insertedId, ...newProducts});
        result(null, { id: res.insertedId, newProducts});
    });
};

Products.findById = (id, res) => {
    sql.query(`select * from products where id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          if (res.length) {
            console.log("found products: ", res[0]);
            result(null, res[0]);
            return;
          }
          result({ kind: "not_found" }, null);
    });
};

Products.getAll = (games, result) => {
    let query = "select * from products";

    if (games) {
        query += `where games like '%${games}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("err: ", err);
            result(null, err);
            return;
        }

        console.log("products: ", res);
        result(null, res);
    });
};

Products.getAllPrices = result => {
    sql.query("select from products where prices=true", (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }

          console.log("products: ", res);
          result(null, res);
    });
}

Products.updateById = (id, products, result) => {
    sql.query(
      "UPDATE products set games = ?, prices = ? where id = ?",
      [products.games, tutorial.price, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated products: ", { id: id, ...products });
        result(null, { id: id, ...products });
      }
    );
  };

  Products.remove = (id, result) => {
    sql.query("delete from products where id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted products with id: ", id);
      result(null, res);
    });
  };

Products.removeAll = result => {
    sql.query("delete from products", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
    });
};

module.exports = Products;
  