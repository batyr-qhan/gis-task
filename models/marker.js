const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  firstCoord: Number,
  secondCoord: Number,
  name: String,
});

module.exports = mongoose.model('Marker', markerSchema);
