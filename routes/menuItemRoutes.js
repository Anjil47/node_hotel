const express = require("express");
const router = express.Router();
const MenuItem = require("./../modles/MenuItem");
const { result } = require("lodash");

router.post("/", async (req, res) => {
  try {
    const item = req.body;
    const newItem = new MenuItem(item);

    const itemsaved = await newItem.save();
    console.log("data saved");
    res.status(200).json(itemsaved);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const item = await MenuItem.find();
    console.log("data fetchedup");
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//---------------------// Extracting the work type from the URL parameter-----------------------//

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("Data featched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid taste" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//---------------------Updatig -----------------------//
router.put("/:id", async (req, res) => {
  try {
    const menuItemID = req.params.id; // Extracting the menu'sdata from URL
    const updatedMenuData = req.body; //

    const response = await MenuItem.findByIdAndUpdate(
      menuItemID,
      updatedMenuData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Menu Item not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//-----------------------Deleting-----------------------//
router.delete("/:id", async (req, res) => {
  try {
    const menuItemID = req.params.id; // Extracting the menu'sdata from URL
    const response = await MenuItem.findByIdAndDelete(menuItemID);
    if (!response) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "MenuItem deteted successfully" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Exporting to router files to server.js
module.exports = router;

// testing purpose//
