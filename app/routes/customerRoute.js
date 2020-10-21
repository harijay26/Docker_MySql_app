

module.exports = appCus => {
    const customers = require("../controllers/customerController");

// Retrieve all Customers
appCus.get("/customers", customers.findAll);

}