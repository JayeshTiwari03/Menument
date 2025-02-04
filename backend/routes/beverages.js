const express = require('express');
// const Beverage = require('../models/Beverage'); // Import the Beverage model
const router = express.Router();

// GET all beverages
router.get('/', async (req, res) => {
  try {
    const beverages = await Beverage.find();
    res.json(beverages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new beverage
router.post('/', async (req, res) => {
  const beverage = new Beverage({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    isAlcoholic: req.body.isAlcoholic,
    photo: req.body.photo,
  });

  try {
    const newBeverage = await beverage.save();
    res.status(201).json(newBeverage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;