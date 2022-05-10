const Quiz = require("../models/quizModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const fs = require("fs")

// Create Question -- Teacher
exports.createQuestion = catchAsyncErrors(async (req, res, next) => {

  const newQuestion = await Quiz.create(req.body);

  res.status(201).json({
    success: true,
    newQuestion,
  });
});

// Get All Quizes (student)
exports.getAllQuizs = catchAsyncErrors(async (req, res, next) => {
    var quiz = await Quiz.find({type:"Quiz"}).sort({"createdAt":-1}).limit(6);
    res.status(200).json({
      success: true,
      quiz,
    });
  });

  // Get All Test (student)
exports.getAllTest = catchAsyncErrors(async (req, res, next) => {
    var test = await Quiz.find({type:"Test"}).sort({"createdAt":-1}).limit(6);
    res.status(200).json({
      success: true,
      test,
    });
  });

// Get Quiz Details (student)
exports.getQuizsDetails = catchAsyncErrors(async (req, res, next) => {
    var quizDetails = await Quiz.findById(req.params.id);
    res.status(200).json({
      success: true,
      quizDetails,
    });
  });

// Get Test Details (student)
exports.getTestDetails = catchAsyncErrors(async (req, res, next) => {
    var testDetails = await Quiz.findById(req.params.id);
    res.status(200).json({
      success: true,
      testDetails,
    });
  });


