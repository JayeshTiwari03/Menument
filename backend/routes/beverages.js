const express = require("express");
const Beverage = require("../models/BeverageList");
const router = express.Router();
const upload = require("../images/multer");

// GET all beverages
router.get("/getBeverages", async (req, res) => {
  try {
    const beverages = await Beverage.find();
    res.json(beverages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new beverage
router.post("/saveBeverage", upload.single("photo"), async (req, res) => {
  const beverage = new Beverage({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    isAlcohol: req.body.isAlcohol,
    photo: req.file.path,
  });

  try {
    const newBeverage = await beverage.save();
    res.status(201).json(newBeverage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
