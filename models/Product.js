const path = require("path");
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");
const databasePath = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = async (cb) => {
  const products = await getDB().collection("products").find({}).toArray();
  cb(products);
};

module.exports = class Product {
  constructor(title, price, categoryId) {
    this.title = title;
    this.price = price;
    this.categoryId = new ObjectId(categoryId);
  }

  async save() {
    getDB().collection("products").insertOne(this);
  }

  static async fetchAll(cb) {
    const products = await getDB().collection("products").find({}).toArray();
    console.log(products);

    cb(products);
  }

  static async fetchById(id, cb) {
    const products = await getDB()
      .collection("products")
      .find({ _id: id })
      .toArray();
    cb(products);
  }
};
