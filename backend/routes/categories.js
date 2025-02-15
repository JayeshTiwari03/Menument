const express = require("express");
const Category = require("../models/CategoryList"); // Import the Category model
const router = express.Router();

// GET all categories
router.get("/getCategories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new category
router.post("/saveCategory", async (req, res) => {
  const category = new Category({
    name: req.body.name,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/editCategory", async (req, res) => {
  // id
  const { name, _id } = req.body;

  const category = await Category.findById(_id);
  category.name = name;
  const updatedCategory = await category.save();
  res.json(updatedCategory);
});

module.exports = router;
