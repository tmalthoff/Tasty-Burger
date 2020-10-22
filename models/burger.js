// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  
  updateOne: function(id, cb) {
      var condition = "id=" + id;
    orm.update("burgers", { devoured: true }, condition, function(res) {
      cb(res);
    });
  },
  
  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
