const express = require('express');
const MenuItem = require('../models/MenuItem'); // Import the MenuItem model
const router = express.Router();

// GET all menu items
router.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new menu item
router.post('/menuItem', async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    isAvailable: req.body.isAvailable,
    photo: req.body.photo,
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;