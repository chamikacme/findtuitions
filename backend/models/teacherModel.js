const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lname: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true
  },
  phone: {
    type: String,
    required: [true, "Please enter your mobile number"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  gender: {
    type: String,
    required: [true, "Please enter your gender"],
  },
  district: {
    type: String,
    required: [true, "Please enter your district"],
  },
  subjects: {
    type: Array,
    required: [true, "Please enter your subjects"],
  },
  physical: {
    type: Array,
    required: [true, "Please enter your preferred areas for physical classes"],
  },

  online: {
    type: Boolean,
    required: [true, "Please enter your availability for online classes"],
  },
},
{
  timestamps: true
});

module.exports = mongoose.model("Teacher", teacherSchema);
