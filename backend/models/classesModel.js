const mongoose = require("mongoose");

const classesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Topic Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Topic Description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  instructorName : {
    type: String,
    required: [true, "Please Enter Instructor Name "],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Classes", classesSchema);
