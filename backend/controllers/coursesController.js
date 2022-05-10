const Courses = require("../models/coursesModel");
const CoursesTopic = require("../models/courseTopicModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const fs = require("fs")

// Create Courses -- Teacher
exports.createCourses = catchAsyncErrors(async (req, res, next) => {
    let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    var result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "course",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.images = imagesLinks;

  const courses = await Courses.create(req.body);
  res.status(201).json({
    success: true,
    courses,
  });
});

// Get All Courses (Teacher)
exports.getAllCourses = catchAsyncErrors(async (req, res, next) => {
    var courses = await Courses.find();
    res.status(200).json({
      success: true,
      courses,
    });
  });

  // Create Courses Topic -- Teacher
exports.createCourseTopic = catchAsyncErrors(async (req, res, next) => {
    let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    var result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "courseTopic",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.images = imagesLinks;
  req.body.courseId = req.body.courseId;

  const courses = await CoursesTopic.create(req.body);
  res.status(201).json({
    success: true,
    courses,
  });
});

  // Get Course Details (Teacher)
exports.getCourseDetails = catchAsyncErrors(async (req, res, next) => {
    var courses = await Courses.findById(req.params.id);
    res.status(200).json({
      success: true,
      courses,
    });
  });

   // Get Course Topic Details (Teacher)
exports.getCourseTopicDetails = catchAsyncErrors(async (req, res, next) => {
    var courses = await CoursesTopic.findById(req.params.id);
    res.status(200).json({
      success: true,
      courses,
    });
  });

   // Get Course Topic Details (Teacher)
exports.getCourseTopicDetails2 = catchAsyncErrors(async (req, res, next) => {
    var courses = await CoursesTopic.find({courseId:req.params.id});
    res.status(200).json({
      success: true,
      courses,
    });
  });




