const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchemaModel = new Schema({
  title: String,
  price: Number,
  categoryId: mongoose.Types.ObjectId,
});

mongoose.model("products", productSchemaModel);
