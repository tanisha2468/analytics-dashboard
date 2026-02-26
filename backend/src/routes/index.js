const saleRoutes = require("./sale.routes");
const authRoutes = require("./auth.routes");

module.exports = (app) => {
  app.use("/api/sales", saleRoutes);
  app.use("/api/auth", authRoutes);
};
