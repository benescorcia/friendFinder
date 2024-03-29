// // Dependencies
// // =============================================================
// const express = require("express");

// // Sets up the Express App
// // =============================================================
// const app = express();
// const PORT = process.env.PORT || 3000;
// // parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// // parse application/json
// app.use(express.json());
// // Static directory to be served
// // app.use(express.static("app/public"));
// // Routes

// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//   console.log(`App listening on http://localhost:${PORT}`);
// });

// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});