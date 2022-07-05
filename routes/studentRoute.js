const express = require('express');
const { getAllStudents, createStudents, showStudents, showStudentsFrom, deleteStudent } = require('../controllers/studentController');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//!multer config
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, './assets/upload/')

    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

//todo _ load multer

const studentMulter =multer({
 storage : storage
}).single('photo')



//todo - Student Route//
router.get('/', getAllStudents);
router.get('/create', showStudentsFrom);
router.post('/', studentMulter, createStudents);
router.get('/:id', showStudents);
router.get('/delete/:id', deleteStudent);


//todo - Export Student Route//
module.exports = router;