const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const registerRoutes = require("./routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

registerRoutes(app);

app.listen(5001, () => {
  ("server running on port 5000");
});
