const Calander = require("../models/calanderModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const fs = require("fs")

// Create Calander -- Teacher
exports.createCalander = catchAsyncErrors(async (req, res, next) => {
  const newCalander = await Calander.create(req.body);
  res.status(201).json({
    success: true,
    newCalander,
  });
});

// Get All Today Calander (Teacher)
exports.getAllToday = catchAsyncErrors(async (req, res, next) => {
    var calander = await Calander.find({type:"Today"}).sort({"_id":-1}).limit(3);
    res.status(200).json({
      success: true,
      calander,
    });
  });

  
// Get All UpComming Calander (Teacher)
exports.getAllUpComming = catchAsyncErrors(async (req, res, next) => {
    var calander = await Calander.find({type:"UpComming"}).sort({"_id":-1}).limit(3);
    res.status(200).json({
      success: true,
      calander,
    });
  });



