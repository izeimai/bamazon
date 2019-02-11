# bamazon
CLI app using Node and MySQL database to recreate Amazon-like storefront

## Video walk through: https://drive.google.com/file/d/1Yrlk3xZ9CXQqrgfP7UfswpNbhvIshd9_/view

*What does this app do?*
Challenge #1: Customer View


*How is this app useful?*
I learned how to generate .sql files to create, update and query a MySQL database using Node and npm modules. I've also become more comfortable looking through npm to find a module that works well with the requirments that are given. For shorter code in the prompts and displayed products, I used node-client-prompt and 

*Future directions*
Why restrict purchase transactions to only one type of item? I think we should also enable multiple purchases without having to type in 'node bamazonCustomer.js' multiple times. I create a confirm prompt after the initial purchase asking if the user wants to buy something else as well or proceed to checkout. If they select buying something else, the table of available products should reappear. Once they are ready to proceed to checkout, the total should reflect the multiple purchases and update the database accordingly. Also as a user, I would probably want to know how many units of each item are available (before running into the issue of requesting more than the stock), so having the units available in the initial table would be useful. 