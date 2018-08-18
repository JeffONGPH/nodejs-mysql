var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql1234",
    database: "bamazon_db"
});

// List actions 
function actionPromptList() {
    inquirer.prompt([{
      type: "list",
      message: "Select desired action from menu list",
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
    }).catch(function(err) {
      throw err;
    });
  };

  //List all items 
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

//List items with quantity less than 5 
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

// Add to existing inventory 
function addInventory(){
  connection.query("SELECT * FROM products", function(err, result){
  if(err) throw err;
  var items= [];
  for(var i=0; i<result.length; i++){
  items.push(result[i].product_name);
  }

  inquirer.prompt([{
    type: "list",
    name: "product",
    choices: items,
    message: "Which item would you like to add inventory?"
  }, {
    type: "input",
    name: "qty",
    message: "How much would you like to add?",
    validate: function(value){
      if(isNaN(value) === false){return true;}
      else{return false;}
    }
    }]).then(function(ans){
      var inventory;
      for(var i=0; i<result.length; i++){
        if(result[i].product_name === ans.product){
          inventory= result[i].stock_quantity;
        }
      }
      connection.query("UPDATE Products SET ? WHERE ?", [
        {stock_quantity: inventory + parseInt(ans.qty)},
        {product_name: ans.product}
        ], function(err, result){
          if(err) throw err;
          console.log("Update succesful");
        });
      })
  });
}

//Add New Product 
function addNewProduct(){
  var departmentsArray= [];

  connection.query("SELECT * FROM products", function(err, result){
    if(err) throw err;
    for(var i = 0; i<result.length; i++){
      departmentsArray.push(result[i].department_name);
    }
  })

  inquirer.prompt([{
    type: "input",
    name: "product",
    message: "Product: ",
    validate: function(value){
      if(value){return true;}
      else{return false;}
    }
  }, {
    type: "list",
    name: "department",
    message: "Choose department ",
    choices: departmentsArray
  }, {
    type: "input",
    name: "price",
    message: "Set Price ",
    validate: function(value){
      if(isNaN(value) === false){return true;}
      else{return false;}
    }
  }, {
    type: "input",
    name: "quantity",
    message: "Set Quantity ",
    validate: function(value){
      if(isNaN(value) == false){return true;}
      else{return false;}
    }
  }]).then(function(ans){
    connection.query("INSERT INTO Products SET ?",{
      product_name: ans.product,
      department_name: ans.department,
      Price: ans.price,
      stock_quantity: ans.quantity
    }, function(err, result){
      if(err) throw err;
      console.log("Item successfully added");
    })
  });
}


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  actionPromptList();
});