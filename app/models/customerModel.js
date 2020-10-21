

const sql = require("./db.js");

// Constructor
const Customer = customer => {

    this.FirstName = customer.firstName;
    this.LastName = customer.lastName;
    this.Street = customer.street;
    this.City = customer.city;
    this.Zip = customer.zip;
    this.Phone = customer.phone;
    this.Email = customer.email;
};

Customer.getAll = result => {
    sql.query("SELECT * FROM customers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res);
    });
  };

  module.exports = Customer;