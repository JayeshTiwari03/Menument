const express = require("express");
const MenuItem = require("../models/MenuItem"); // Import the MenuItem model
const router = express.Router();
const upload = require("../images/multer");

// GET all menu items
router.get("/getMenu", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new menu item
router.post("/saveMenuItem", upload.single("photo"), async (req, res) => {
  console.log(upload); // Should log the Multer instance
  const { name, description, price, category, isAvailable } = req.body;
  const photo = req.file.path;

  const menuItem = new MenuItem({
    name: name,
    description: description,
    price: price,
    category: category,
    isAvailable: isAvailable,
    photo: photo,
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
