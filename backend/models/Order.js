const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    address: String,
    total: Number,
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);