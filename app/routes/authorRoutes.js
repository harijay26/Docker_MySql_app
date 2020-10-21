

module.exports = appAuthor => {
    const authors = require("../controllers/authorController");

// Retrieve all Author
appAuthor.get("/authors", authors.findAll);

}