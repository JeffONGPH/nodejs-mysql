# nodejs-mysql Assignment 
## An Amazon-like storefront created using MySQL & Node.js 

node.js package installations, run following codes in terminal
- npm install require
- npm install inquirer
- npm install mysql

1. Customer View (bamazonCustomer.js)
 - This  app accepts orders from customers and update store's stock quantity for a particular item.

 - First, the app displays a list of available items for sale, their costs and current inventory.
![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/item%20List.png)

 - Then it asks for: 
    -ID of desired item 
    -quantity the user wishes to purchase 
    ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/questions.png)
    
 - If the item is still available in stock, it will display the total cost and quantity 
![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/purchase-succesful.png)
     - else 
    ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/insufficient-quantity.png)
    
    
2. Manager View 
-Build for the manager, this app allows inventory management and update through four actions from its menu list.
![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/menu.png)
#1 View all products 
![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/viewproducts.png)

#2 View Low inventories 
    -shows items with quantities less than five 
    ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/low.png)

#3 Restock inventory 
    -add to existing items 
    ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/add.png)

#4 Add new items 
    -expand your list of items for sale!
     ![alt text](https://github.com/JeffONGPH/nodejs-mysql/blob/master/screenshots/newproduct.png)
     
     
     -----End of documentation------
     
     Copyright
     Jeff Ong (C) 2018. All Rights Reserved.
    
    
    

