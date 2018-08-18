# nodejs-mysql Assignment 
## An Amazon-like storefront created using MySQL & Node.js 

node.js package installations, run following codes in terminal
-npm install require
-npm install inquirer
-npm install mysql

1. Customer View 
-This part of the app accepts orders from customers and update store's stock quantity for a particular item.

-First, the app displays a list of available items for sale, their costs and current inventory.
![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/item%20List.png)

-Then its asks for: 
    -ID of desired item 
    -quantity the user wishes to purchase 
    ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/questions.png)
    
-If the item is still available in stock, it will display the total cost and quantity 
![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/purchase-succesful.png)
    -else 
    ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/insufficient-quantity.png)
    
    *
