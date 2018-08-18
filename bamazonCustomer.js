var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql1234",
    database: "bamazon_db"
});


//Start App
listItems();

function listItems() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM products", function (err, result) {
            if (err) throw err;
            //console.log(result);
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
            purchaseItems();
        });

    });

}

//PROMPT QUESTIONS //
function purchaseItems() {
    inquirer.prompt([{
            name: "item",
            type: "input",
            message: "Enter ID of item you want"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
        }
    ]).then(function (answer) {
        //enough stock//
        connection.query("SELECT id,product_name,price,stock_quantity FROM products WHERE ?", {
            id: answer.item
        }, function (err, res) {
            var chosenItem = res[0]
            var desiredQuantity = answer.quantity
            if (chosenItem.stock_quantity > desiredQuantity) {


                //update database//
                connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: res[0].stock_quantity - desiredQuantity
                    },
                    {
                        id: answer.item
                    }
                ], function (error) {
                    if (error) throw err;
                });

                //message to customer//
                console.log("You purchased " + desiredQuantity + " of " + chosenItem.product_name + " for $" + chosenItem.price * desiredQuantity)
            } else {
                console.log("Insufficient Quantity!")
            }
        });
    })
}
//purchaseItems
//end