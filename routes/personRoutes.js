const express = require("express");
const router = express.Router();
const Person = require("./../modles/person");

router.post("/", async (req, res) => {
  // POST route to add a person
  try {
    const data = req.body; // Assuming the request body contains the person data
    const newPerson = new Person(data); // Creating a new Person document using the Mongoose model
    const response = await newPerson.save(); // Saving the new Person to the database

    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//---------------------// Extracting the work type from the URL parameter-----------------------//

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "manager" || workType == "chef" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid workType" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ---------------------// Updating Datas of server--------------------------//
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extracting the person's id from URL parameter
    const updatedPersonData = req.body; // updating data for the person

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//----------------------------------------------------------//

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extracting the person's id from URL parameter
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "person deteted successfully" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Exporting to router files to server.js
module.exports = router;
