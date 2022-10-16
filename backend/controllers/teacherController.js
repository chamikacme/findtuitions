const asyncHandler = require("express-async-handler");
const Teacher = require("../models/teacherModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { findOne } = require("../models/teacherModel");

// @dec get Teachers
// @route GET api/teachers
const getTeachers = asyncHandler(async (req, res) => {
  const { subject, physical, online } = req.body;
  let subjectFilter = {};
  let physicalFilter = {};
  let onlineFilter = {};

  if (subject) {
    subjectFilter = { subjects: subject };
  }
  if (physical) {
    physicalFilter = { physical: physical };
  }
  if (online) {
    onlineFilter = { online: online };
  }
  const teachers = await Teacher.find(
    {
      $and: [subjectFilter, physicalFilter, onlineFilter],
    },
    { password: 0 }
  );
  res.status(200).json(teachers);
});

// @dec add Teachers
// @route POST api/teachers/register
const registerTeacher = asyncHandler(async (req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    password,
    gender,
    district,
    subjects,
    physical,
    online,
  } = req.body;

  //check for empty fields
  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !district ||
    !subjects ||
    !online
  ) {
    res.status(400);
    throw new Error("Please enter details");
  }

  //check if user exists
  const userEmailExists = await Teacher.findOne({ email });
  const userPhoneExists = await Teacher.findOne({ phone });

  if (userEmailExists || userPhoneExists) {
    res.status(400);
    throw new Error("Email or phone number or both have already registered");
  }

  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create teacher
  const teacher = await Teacher.create({
    fname,
    lname,
    email,
    phone,
    password: hashedPassword,
    gender,
    district,
    subjects,
    physical,
    online,
  });

  if (teacher) {
    res.status(201).json({
      _id: teacher.id,
      name: teacher.fname + " " + teacher.lname,
      email: teacher.email,
      phone: teacher.phone,
      token: generateToken(teacher._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @dec update Teacher
// @route PUT api/teachers/:id
const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    res.status(400);
    throw new Error("Teacher not found!");
  }

  if (teacher._id.toString() !== (await req.teacher.id)) {
    res.status(401);
    throw new Error("This user have not access to this teacher profile");
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

  if (teacher._id.toString() !== (await req.teacher.id)) {
    res.status(401);
    throw new Error("This user have not access to this teacher profile");
  }

  const updatedTeacher = await Teacher.findByIdAndDelete(req.params.id);
  res.status(200).json(updatedTeacher);
});

// @dec login Teachers
// @route POST api/teachers/login
const loginTeacher = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email
  const teacher = await Teacher.findOne({ email });

  if (teacher && (await bcrypt.compare(password, teacher.password))) {
    res.json({
      _id: teacher.id,
      name: teacher.fname + " " + teacher.lname,
      email: teacher.email,
      phone: teacher.phone,
      token: generateToken(teacher._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @dec Get My data
// @route POST api/teachers/me
const getMe = asyncHandler(async (req, res) => {
  const myProfile = await Teacher.findById(req.teacher._id);
  res.status(200).json(myProfile);
});

//generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const test = asyncHandler(async (req, res) => {
  res.status(200).json({
    id: req.teacher.id,
  });
});

module.exports = {
  getTeachers,
  registerTeacher,
  updateTeacher,
  deleteTeacher,
  loginTeacher,
  getMe,
  test,
};
