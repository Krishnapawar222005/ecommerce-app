const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);

    await order.save();

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Get All Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;