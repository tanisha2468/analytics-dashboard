require("dotenv").config();
const mongoose = require("mongoose");
const Sale = require("./src/models/sale.model");

mongoose.connect(process.env.MONGO_URI);

const categories = ["Electronics", "Clothing", "Groceries", "Furniture"];

const data = [];

for (let i = 1; i <= 50; i++) {
  data.push({
    date: new Date(2026, 1, Math.floor(Math.random() * 28) + 1),
    category: categories[Math.floor(Math.random() * categories.length)],
    revenue: Math.floor(Math.random() * 5000) + 500,
    quantity: Math.floor(Math.random() * 20) + 1,
  });
}

Sale.insertMany(data).then(() => {
  console.log("Data seeded successfully");
  mongoose.connection.close();
});
