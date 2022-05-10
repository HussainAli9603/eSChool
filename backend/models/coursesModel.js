const mongoose = require("mongoose");

const coursesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Course Name"],
    trim: true,
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
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Courses", coursesSchema);
