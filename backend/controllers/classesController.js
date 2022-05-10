const Classes = require("../models/classesModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const fs = require("fs")

// Create Classes -- Teacher
exports.createClasses = catchAsyncErrors(async (req, res, next) => {
    let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    var result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "classes",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.images = imagesLinks;

  const classes = await Classes.create(req.body);
  res.status(201).json({
    success: true,
    classes,
  });
});

// Get All Classes (Teacher)
exports.getAllClasses = catchAsyncErrors(async (req, res, next) => {
    var classes = await Classes.find();
    res.status(200).json({
      success: true,
      classes,
    });
  });

   // Get Class Details (Teacher)
exports.getClassDetails = catchAsyncErrors(async (req, res, next) => {
    var classes = await Classes.findById(req.params.id);
    res.status(200).json({
      success: true,
      classes,
    });
  });




