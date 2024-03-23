"use strict";

const { default: mongoose } = require("mongoose");
const {countConnect} = require("../helpers/check.connect");
const config = require("../configs/config.mongodb");

const connectString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

// only create one instance of the database
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    // development mode
    if (true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then(() => {
        console.log("MongoDB connected");
        countConnect();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}

const instance = Database.getInstance();
module.exports = instance;
