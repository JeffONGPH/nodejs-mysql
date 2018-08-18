var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql1234",
    database: "bamazon_db"
});

function actionPromptList() {
    inquirer.prompt([{
      type: "list",
      message: "Select from list below what action you would like to complete",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
      name: "action"
    }, ]).then(function(selection) {
      switch (selection.action) {
        case "View Products for Sale":
          productsForSale();
          break;
  
        case "View Low Inventory":
          viewLowInventory();
          break;
  
        case "Add to Inventory":
          addInventory();
          break;
  
        case "Add New Product":
          addNewProduct();
          break;
      }
    }).catch(function(error) {
      throw error;
    });
  };

function productsForSale() {
  connection.query('SELECT * FROM products', function(err, result) {
    if (err) throw err;
    console.log("welcome shoppers, please empty our inventories")
    for (var i = 0; i < result.length; i++) {
        var listings = "ItemID: " + result[i].id + "\r\n" +
            "Product Description: " + result[i].product_name + "\r\n" +
            "Department: " + result[i].department_name + "\r\n" +
            "Price: $ " + result[i].price + "\r\n" +
            "Current Stock: " + result[i].stock_quantity +
            "\r\n";
        console.log(listings);
    }
    //connection.end();
  });
};

function viewLowInventory() {
  connection.query("SELECT id, product_name, stock_quantity, department_name, price FROM products  WHERE stock_quantity < 5", function(err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
        var lowInventoryList = "ItemID: " + result[i].id + "\r\n" +
            "Product Description: " + result[i].product_name + "\r\n" +
            "Department: " + result[i].department_name + "\r\n" +
            "Price: $ " + result[i].price + "\r\n" +
            "Current Stock: " + result[i].stock_quantity +
            "\r\n";
        console.log(lowInventoryList);
    }
   
  });
};





connection.connect(function(error) {
  if (err) throw err;
  console.log("Connected");
  actionPromptList()();
});