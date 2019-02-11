// Dependencies: mysql, node-console-input, console.table and dotenv modules
// mysql to connect to the database
var mysql = require("mysql");
// originially used inquirer but decided to use node-consule-input for prompts per TA's helpful suggestion
var conif = require("node-console-input");
// Also found it cumbersome to read scroll through 10 items every time so included a table format output module
var cTable = require("console.table");
// storing password in an separate env file and using dotenv module
require("dotenv").config();


// Define connection with mysql package's createConnection function
var connection = mysql.createConnection({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "bamazon_DB"
});

// Actually connect to the database and console log that you're connected as an id#
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayAllItems(); // function to display all items
});

// Display all items available for sale. Include the ids, names, and prices of products for sale
var displayAllItems = function () {
    console.log("Displaying all available items: \n");
    var query = connection.query(
        "SELECT item_id, product_name, price from products",
        function (err, res) {
            if (err) throw err;
            // originally console.logged all items as a loop but a table is to see the item ids without scrolling
            console.table(res);
            // function to prompt user for next step
            promptForPurchase();
        }
    )

};

// Asks user what and how many items to purchase
var promptForPurchase = function () {
    var requestedItemId = conif.getConsoleInput("What is the ID number of the product you would like to purchase?  ");
    var requestedQuantity = conif.getConsoleInput("How many units of the product would you like to purchase?  ");

    // Queries database for the stock quantity of the item that matches the requested item id
    var query2 = connection.query(
        "SELECT stock_quantity from products WHERE item_id=?",
        [requestedItemId],
        function (err, res) {
            if (err) throw err;
            // Since the item_id is unique, there should only be one item's stock quantity returned
            var stockQuantity = res[0].stock_quantity;
            if (stockQuantity < requestedQuantity) {
                console.log("Insufficient quantity! There are " + stockQuantity + " units available in stock");
                connection.end();
            } else {
                // There is sufficient stock of the requested item so  runs the function 'fulfillOrder' by passing the requested item id number, units, units in stock of the item
                fulfillOrder(requestedItemId, requestedQuantity, stockQuantity);
            }
        });
}

var fulfillOrder = function (requestedItemId, requestedQuantity, stockQuantity) {
    // Calculates the updated stock quantity after subtracting requested number of units
    var updatedQuantity = stockQuantity - requestedQuantity;
    // Update the stock quantity of the item that matches the requestedItemId number
    var query3 = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            { stock_quantity: updatedQuantity },
            { item_id: requestedItemId }
        ],
        function (err, res) {
            if (err) throw err;
            // confirmation to user that the item has been purchased
            console.log("\nThank you! You have purchased " + requestedQuantity + " unit(s) of item number " + requestedItemId);
            totalPrice(requestedQuantity, requestedItemId);
        }
    )
}

var totalPrice = function (requestedQuantity, requestedItemId) {
    // Queries for the price of the selected item based on item_id
    var query4 = connection.query(
        "SELECT price FROM products WHERE ?",
        [
            { item_id: requestedItemId }
        ],
        function (err, res) {
            if (err) throw err;
            // Total cost calculation by multiplying the units requested by price
            var totalPrice = res[0].price * requestedQuantity;
            // Console logs the total price to user
            console.log("Your purchase total was $" + totalPrice + "\n");
            // Ends connection to server
            connection.end();
        }
    )
}