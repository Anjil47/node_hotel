const mongoose = require("mongoose");

//Defining the person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    require: true,
  },
});

//Creating Person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
