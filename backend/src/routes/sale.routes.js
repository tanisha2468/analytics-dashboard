const express = require("express");
const { getSales } = require("../controllers/sale.controller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, getSales);

module.exports = router;
