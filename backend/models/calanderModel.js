const mongoose = require("mongoose");

const calanderSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please Enter Type"],
  },
  topicName: {
    type: String,
    required: [true, "Please Enter Topic Name"],
  },
  instructorName : {
    type: String,
    required: [true, "Please Enter Instructor Name "],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Calander", calanderSchema);
