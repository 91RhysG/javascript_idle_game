const { Int32 } = require("bson");
const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  game: {
    type: String,
    required: true,
  },
  started: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Game", TodoSchema);
