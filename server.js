const express = require("express");
const app = express();
const db = require("./db");
const bodyparser = require("body-parser");
app.use(bodyparser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Hello there! welcome to Hotel.., what you want to have today? ");
});

// Importing the router files
const personRouters = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// use of router files
app.use("/person", personRouters);
app.use("/MenuItem", menuItemRoutes);

app.listen(3000, () => {
  console.log("Port 3000 running");
});

//---------------------------------------//
