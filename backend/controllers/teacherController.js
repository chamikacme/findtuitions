const asyncHandler = require('express-async-handler')

// @dec get Teachers
// @route GET api/teachers
const getTeachers = asyncHandler(async(req,res) => {
    res.status(200).json({message: "Get teachers"})
})

// @dec add Teachers
// @route POST api/teachers
const addTeacher = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a name');
    }
    res.status(200).json({message: "Add teacher"})
})

// @dec update Teacher
// @route PUT api/teachers/:id
const updateTeacher = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @dec delete Teacher
// @route DELETE api/teachers/:id
const deleteTeacher = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getTeachers, addTeacher, updateTeacher, deleteTeacher
}