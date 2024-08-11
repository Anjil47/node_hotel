const express = require("express");
const app = express();
const db = require("./db");

const bodyparser = require("body-parser");
app.use(bodyparser.json()); //req.body
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello there! welcome to Hotel.., what you want to have today? ");
});

// Importing the router files
const personRouters = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// use of router files
app.use("/person", personRouters);
app.use("/MenuItem", menuItemRoutes);

app.listen(PORT, () => {
  console.log("Port 3000 running");
});

//---------------------------------------//
