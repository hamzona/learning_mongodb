const route = require("express").Router();

const {
  addProductAction,
  addProductPage,
  adminOrders,
  adminProducts,
  editProduct,
  postEditProduct,
  deleteProduct,
} = require("../controllers/admin.controllers");

route.get("/admin/addProduct", addProductPage);
route.post("/admin/addProduct", addProductAction);
route.get("/admin/products", adminProducts);
route.get("/admin/orders", adminOrders);
route.get("/admin/:id/edit", editProduct);
route.post("/admin/:id/edit", postEditProduct);
route.get("/admin/:id/delete", deleteProduct);

module.exports = route;
