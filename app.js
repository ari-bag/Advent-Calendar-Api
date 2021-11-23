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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});


app.use(cors());

app.use(cors({ origin: "https://shrouded-castle-77871.herokuapp.com/", credentials: true }))

// Add endpoint
app.get('/', (req, res) => {
  console.log('i enter')
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});
