'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
const cors = require('cors');

require("./config/db")

// Import API route
var routes = require('./routes/api'); //importing route

// create express app
const  app = express();

app.use("/api", routes);

// define port to run express app
const  port = process.env.PORT || 3000;


// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(cors());

// Add endpoint
app.get('/', (req, res) => {
  console.log('i enter')
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});
