var express = require('express');
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//imports routes give server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
//start server 
app.listen(PORT, function () {
  //log (server-side) when server starts
  console.log("Server listening on: http://localhost:" + PORT);
});