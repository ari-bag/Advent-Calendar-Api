const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PresentSchema = new Schema({
  day: { type: Number },
  name: { type: String },
  img: { type: String },
  author: { type: String },
  twitter: { type: String },
  download: { type: String },
  description: { type: String }
});

module.exports = mongoose.model("Present", PresentSchema);
