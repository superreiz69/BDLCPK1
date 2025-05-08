const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Halo Teman-Teman!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/')

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://reizaldie1:Ww0zOfpN0Xz4NTli@bdlbackenddb.9rkyqwp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BDLBackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
