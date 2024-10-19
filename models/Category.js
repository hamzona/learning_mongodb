const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchemaModel = new Schema({
  name: String,
});

mongoose.model("categories", categorySchemaModel);
