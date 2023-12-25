// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for the "contacts" collection
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  selection: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Middleware
app.use(bodyParser.json());

// API endpoint to handle form data for the "contacts" collection
app.post("/api/saveFormData", async (req, res) => {
  try {
    const formData = req.body;

    // Save the form data to MongoDB in the "contacts" collection
    const newContact = new Contact(formData);
    await newContact.save();

    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
