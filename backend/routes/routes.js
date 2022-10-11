const express = require('express')
const router = express.Router()
const {getTeachers, addTeacher, updateTeacher, deleteTeacher} = require('../controllers/teacherController')


//router.route('/').get(getTeachers).post(addTeacher)

router.get('/', getTeachers)
router.post('/', addTeacher)

//router.route('/:id').delete(deleteTeacher).put(updateTeacher)

router.put('/:id', updateTeacher)
router.delete('/:id', deleteTeacher)

module.exports = router