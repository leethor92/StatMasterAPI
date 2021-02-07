'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  manager: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = Mongoose.model('Team', teamSchema);