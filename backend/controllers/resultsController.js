const Results = require("../models/resultsModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const fs = require("fs")

// Get All Results (Teacher)
exports.getAllResults = catchAsyncErrors(async (req, res, next) => {
  var allResults = await Results.find();
  res.status(200).json({
    success: true,
    allResults,
  });
});

// Create Results (Teacher)
exports.createResults = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});


