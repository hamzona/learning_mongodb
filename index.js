const express = require("express");
const path = require("path");

const { mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

require("./models/Category");
require("./models/Product");

const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");
const cartRoutes = require("./routes/cart.routes");

const errorController = require("./controllers/error.controllers");

app.use(productRoutes);
app.use(adminRoutes);
app.use(cartRoutes);

app.get("*", errorController.get404);

mongoose.connect("mongodb://127.0.0.1:27017/nodeshop").then(() => {
  app.listen(5000);
});
