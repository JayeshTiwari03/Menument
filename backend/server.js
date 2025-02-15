const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const menuItemRoutes = require("./routes/menu");
const categoryRoutes = require("./routes/categories");
const beverageRoutes = require("./routes/beverages");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", menuItemRoutes);
app.use("/api", categoryRoutes);
app.use("/api", beverageRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is started at port ${PORT}`);
  }
});
