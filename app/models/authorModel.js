const sql = require("./db");

// Constructor 
const Author = author => {

    this.FirstName = author.firstName;
    this.LastName = author.lastName;
    this.Address = author.address;
    this.URL = author.url;
   
};


Author.getAll = result => {
    sql.query("SELECT * FROM authors", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("author: ", res);
      result(null, res);
    });
  };


  module.exports = Author;