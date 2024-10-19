const { getDB } = require("../util/database");

class Category {
  static async fetchAll() {
    const categories = await getDB().collection("category").find({}).toArray();
    return categories;
  }
}

module.exports = Category;
