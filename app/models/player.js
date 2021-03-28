'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  number: String,
  position: String,
  point: Number,
  goal: Number,
  shot: Number,
  wide: Number,
  pass: Number,
  missedPass: Number,
  posession: Number,
  lostPosession: Number,
  passAcc: Number,
  shootingAcc: Number,
  ballRetention: Number,
});

module.exports = Mongoose.model('Player', playerSchema);