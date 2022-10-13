const asyncHandler = require("express-async-handler");

const Teacher = require("../models/teacherModel");

// @dec get Teachers
// @route GET api/teachers
const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find();
  res.status(200).json(teachers);
});

// @dec add Teachers
// @route POST api/teachers
const addTeacher = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter details");
  }

  const teacher = await Teacher.create({
    name: req.body.text,
    subject: req.body.subject,
  });
  res.status(200).json(teacher);
});

// @dec update Teacher
// @route PUT api/teachers/:id
const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    res.status(400);
    throw new Error("Teacher not found!");
  }

  const updatedTeacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedTeacher);
});

// @dec delete Teacher
// @route DELETE api/teachers/:id
const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    res.status(400);
    throw new Error("Teacher not found!");
  }

  const updatedTeacher = await Teacher.findByIdAndDelete(req.params.id);
  res.status(200).json(updatedTeacher);
});

module.exports = {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
