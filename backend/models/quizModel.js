const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  addQuestion: {
    type: String,
    required: [true, "Please Enter Quiz Question"],
    trim: true,
  },
  questionType: {
    type: String,
    required: [true, "Please Enter Quiz Quiestion Type"],
  },
  answer: {
    type: String,
    required: [true, "Please Enter Answer"],
  },
  pointType: {
    type: Number,
    required: [true, "Please Enter Point Type"],
  },
  type: {
    type: String,
    required: [true, "Please Enter Type"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
