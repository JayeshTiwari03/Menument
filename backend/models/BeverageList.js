const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beverageSchema = new Schema({
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
  isAlcohol: {
    type: Boolean,
    default: false,
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

const Beverage = mongoose.model("Beverage", beverageSchema);

module.exports = Beverage;
