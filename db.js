const mongoose = require("mongoose");
require("dotenv").config();

//Defining the MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL // 'hotes' is a desired database name.
const mongoURL = process.env.MONGODB_URL; //

//Setting up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Getting default connection
//Mongoose maintains a default connection object representing the MongoDB connection,
const db = mongoose.connection;

// Defining event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection Error ");
});

db.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

//Exporting the Database connection
module.exports = db;
