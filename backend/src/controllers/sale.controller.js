const Sale = require("../models/sale.model");
exports.getSales = async (req, res) => {
  try {
    const { start, end, category } = req.query;

    let filter = {};

    if (start && end) {
      filter.date = {
        $gte: new Date(start),
        $lte: new Date(end),
      };
    }

    if (category) {
      filter.category = category;
    }

    const data = await Sale.find(filter);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
