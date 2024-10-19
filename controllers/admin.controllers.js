const mongoose = require("mongoose");

const Product = mongoose.model("products");
const Category = mongoose.model("categories");

exports.addProductPage = async (req, res) => {
  const categories = await Category.find();

  res.render("addProdukt", {
    pageTitle: "Add new product",
    title: "Add produkt",
    path: "/admin/addProduct",
    categories,
  });
};

exports.addProductAction = async (req, res) => {
  const { category, title, price } = req.body;

  const product = await Product.create({ title, price, categoryId: category });
  product.save();
  res.redirect("/");
};

exports.adminProducts = async (req, res) => {
  const products = await Product.find();
  console.log(products);
  res.render("adminProducts", {
    pageTitle: "Add new product",
    path: "/admin/products",
    products: products,
  });
};

exports.adminOrders = (req, res) => {
  res.render("adminOrders", {
    pageTitle: "Admin orders",
    path: "/admin/orders",
  });
};

exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const categories = await Category.find();

  res.render("editProduct", {
    pageTitle: product.title,
    path: "/admin/:id/edit",
    product,
    categories,
  });
};

exports.postEditProduct = async (req, res) => {
  const { id } = req.params;

  const { title, price, category } = req.body;

  const product = await Product.findById(id);

  product.title = title;

  product.price = price;

  product.categoryId = category;
  await product.save();

  res.redirect("/admin/products");
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.deleteOne({ _id: id });
  res.redirect("/admin/products");
};
