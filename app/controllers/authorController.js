const Author = require("../models/authorModel");

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
    Author.getAll((err, data) => {
        if (err)
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Authors."
          });
          else res.send(data);
    });
  };