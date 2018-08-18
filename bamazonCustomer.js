var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
 password: "mysql1234",
 database: "bamazon_db"
});

connection.connect(function(err){
    if(err) throw err;
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        //console.log(result);
        (listItems(result));
      });
   
});

//LIST PRODUCTS AVAILABLE FOR PRUCHASE 
var listItems = function (items){
    console.log("welcome shoppers, please empty our inventories")
    for (var i=0; i<items.length; i++){
        var listings = "ItemID: " + items[i].id+"\r\n"+
                        "Product Description: " + items[i].product_name+"\r\n"+
                        "Department: " + items[i].department_name+"\r\n"+
                        "Price: $ "+ items[i].price+"\r\n"+
                        "Current Stock: " + items[i].stock_quantity+
                        "\r\n";
        console.log(listings);
    }
};//


//PROMP//