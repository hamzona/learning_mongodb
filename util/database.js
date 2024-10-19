const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;
let database;
const connect = async () => {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("nodeshop");
};

const getDB = () => {
  if (!database) {
    throw Error("Database not found");
  }

  return database;
};

module.exports = { connect, getDB };
