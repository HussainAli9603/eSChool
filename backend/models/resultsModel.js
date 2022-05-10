const mongoose = require("mongoose");

const resultsSchema = mongoose.Schema({
  stdName: {
    type: String,
    required: [true, "Please Enter Student Name"],
    trim: true,
  },
  class: {
    type: String,
    required: [true, "Please Enter Class"],
  },
  section: {
    type: String,
    required: [true, "Please Enter Section"],
  },
  subject: {
    type: Number,
    required: [true, "Please Enter Subject"],
  },
  point: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Results", resultsSchema);
