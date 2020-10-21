const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// parse request of content-type: application/json
app.use(bodyParser.json());
// parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Harry Dockerized, Mysql application." });
});

// Routes
require("./app/routes/authorRoutes")(app);
require("./app/routes/customerRoute")(app);

// Set Port, listen to requests
const PORT = process.env.PORT || 8005;
app.listen(PORT, () => {
    console.log(`Server Started running on port ${PORT}`);
});