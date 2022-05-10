const Students = require("../models/studentsModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const fs = require("fs")
const sendToken = require("../utils/jwtToken");

// Login Student
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const student = await Students.findOne({ email }).select("+password");

  if (!student) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await student.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(student, 200, res);
});

// Logout Student
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


// Get All Results (Teacher)
exports.getAllStudents = catchAsyncErrors(async (req, res, next) => {
  var allStudents = await Students.find();
  const studentsCount = await Students.countDocuments();
  res.status(200).json({
    success: true,
    allStudents,
    studentsCount
  });
});

// Create Results (Teacher)
exports.createStudents = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});


