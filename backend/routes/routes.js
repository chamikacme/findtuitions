const express = require("express");
const router = express.Router();
const {
  getTeachers,
  getTeacher,
  registerTeacher,
  updateTeacher,
  deleteTeacher,
  loginTeacher,
  getMe,
  checkUserName,
  test,
} = require("../controllers/teacherController");
const { protect } = require("../middleware/authMiddleware");

//router.route('/').get(getTeachers).post(addTeacher)

router.get("/", getTeachers);
router.post("/", getTeachers);

router.get("/:id", getTeacher);

router.post("/register", registerTeacher);

router.post("/checkusername", checkUserName);

//router.route('/:id').delete(deleteTeacher).put(updateTeacher)

router.put("/:id", protect, updateTeacher);
router.delete("/:id", protect, deleteTeacher);

router.post("/login", loginTeacher);
router.get("/me", protect, getMe);

router.get("/test", test);

module.exports = router;
