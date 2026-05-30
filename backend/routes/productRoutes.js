const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Add product
router.post("/", async (req, res) => {
  try {
    const { name, description, price, image, stock } = req.body;

    const product = new Product({
      name,
      description,
      price,
      image,
      stock,
    });

    await product.save();

    res.status(201).json({
      message: "Product Added",
      product,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;