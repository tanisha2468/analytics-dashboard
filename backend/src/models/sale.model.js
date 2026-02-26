const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  category: { type: String, required: true },
  revenue: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Sale", saleSchema);
