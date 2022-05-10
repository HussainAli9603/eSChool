const mongoose = require("mongoose");

const courseTopicSchema = mongoose.Schema({
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

  courseId: {
    type: mongoose.Schema.ObjectId,
    ref: "Courses",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CourseTopic", courseTopicSchema);
