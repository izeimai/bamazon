# bamazon
CLI app using Node and MySQL database to recreate Amazon-like storefront

## Video walk through: https://drive.google.com/file/d/1Yrlk3xZ9CXQqrgfP7UfswpNbhvIshd9_/view

*What does this app do?*
Challenge #1: Customer View
Is the first portion of the Bamazon storefront that is visible from the customer. The default MySQL database was created with a schema and seed sql file to fill with 10 random items by unique item_id, product name, department name, price and stock quantity. The user is first displayed the contents of the available inventory when the connection to the database is initiated. Inside the terminal, the user is prompted on what item they would like to purchase and how many of the said item they would like. If there is insufficient stock (the available stock quantity is less than the requested number of units), the user is informed that there is "Insufficent stock" and shown how many of the item are available for purchase. If there is sufficient stock, a message displays in the terminal about what they purchases and how much the purchase total comes to. 


*How is this app useful?*
I learned how to generate .sql files to create, update and query a MySQL database using Node and npm modules. I've also become more comfortable looking through npm to find a module that works well with the requirments that are given. For shorter code in the prompts and displayed products, I used node-client-prompt and console.table npm modules. It was also great to review how to protect the password using .gitignore and .env files, as well as ignoring the nodule_modules folder so that it doesn't take up a massive amount of time to add to github.

*Future directions*
Why restrict purchase transactions to only one type of item? I think we should also enable multiple purchases without having to type in 'node bamazonCustomer.js' multiple times. I create a confirm prompt after the initial purchase asking if the user wants to buy something else as well or proceed to checkout. If they select buying something else, the table of available products should reappear. Once they are ready to proceed to checkout, the total should reflect the multiple purchases and update the database accordingly. Also as a user, I would probably want to know how many units of each item are available (before running into the issue of requesting more than the stock), so having the units available in the initial table would be useful. 