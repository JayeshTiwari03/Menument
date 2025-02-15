// models/MenuItem.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the MenuItem schema
const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: false,
    // enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage'],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  photo: {
    type: String,
    required: true,
  },
});

// Create the MenuItem model
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

// Export the model
module.exports = MenuItem;
