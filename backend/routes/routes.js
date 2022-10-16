const express = require("express");
const router = express.Router();
const {
  getTeachers,
  registerTeacher,
  updateTeacher,
  deleteTeacher,
  loginTeacher,
  getMe,
  test,
} = require("../controllers/teacherController");
const { protect } = require("../middleware/authMiddleware");

//router.route('/').get(getTeachers).post(addTeacher)

router.get("/", getTeachers);

router.post("/register", registerTeacher);

//router.route('/:id').delete(deleteTeacher).put(updateTeacher)

router.put("/:id", protect, updateTeacher);
router.delete("/:id", protect, deleteTeacher);

router.post("/login", loginTeacher);
router.get("/me", protect, getMe);

router.get("/test", protect, test);

module.exports = router;
