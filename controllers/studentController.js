const Student = require("../models/studentModel")
/**
 * @dese : get all student data
 * @name GET / students
 * @access : public
 */

const getAllStudents = async (req, res) =>{
    let students = await Student.find();
res.render('index', {students})
}



/**
 * @dese : get all student data
 * @name GET / students
 * @access : public
 */

 const showStudents = async (req, res) =>{

    let id = req.params.id;
    let singleData = await Student.findById(id);

    res.render('show', {singleData})
    }



/**
 * @dese : submit all student data
 * @name GET / create
 * @access : public
 */

const createStudents = (req, res) =>{
    //* srore data in database
   
Student.create({
    ...req.body,
    photo :req.file.filename
});

//*redirect to home page
res.redirect('/student')
}

/**
 * @dese : submit all student data
 * @name GET / create
 * @access : public
 */

const showStudentsFrom = (req, res) =>{
res.render('create')
}
/**
 * @dese : submit all student data
 * @name DELETE / create
 * @access : public
 */

const deleteStudent =async (req, res) =>{
    let id = req.params.id;
   await Student.findByIdAndDelete(id)
res.redirect('/student')
}

//!exports controller

module.exports ={
    getAllStudents,
    createStudents,
    showStudents,
    showStudentsFrom,
    deleteStudent
}