const mongoose = require("mongoose");

const Product = mongoose.model("products");

exports.redirectPage = (req, res) => res.redirect("/products");

exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  res.render("index", {
    pageTitle: "Home page",
    path: "/products",
    products,
  });
};

exports.findProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    const error = { message: "Not found" };
    return res.render("error.ejs", { pageTitle: "Error", path: "", error });
  }

  res.render("product-datails", {
    path: "/products",
    pageTitle: product.title,
    product,
  });
};
