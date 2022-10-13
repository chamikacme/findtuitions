const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
    },

    subject: {
      type: String,
    },
  }
);

module.exports = mongoose.model('Teacher',teacherSchema)