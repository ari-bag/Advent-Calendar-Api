const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PresentSchema = new Schema({
  day: { type: Number },
  name: { type: String },
  img: { type: String },
  autor: { type: Array },
  twitter: { type: Array },
  download: { type: String },
  description: { type: String }
});

module.exports = mongoose.model("Present", PresentSchema);
