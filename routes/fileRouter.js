const express = require('express');
const crypto  = require('crypto');
const multer  = require("multer");
const config  = require('./../config');

const fileController = require('../controllers/fileController');

const storageConfigStudent = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/file/student');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const storageConfigTeacher = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/file/teacher');
    },
    filename: (req, file, cb) => {
        let type = file.mimetype.split('/');
        console.log(file);
        cb(null, file.originalname);
    }
});


const uploadStudent = multer({storage: storageConfigStudent});
const uploadTeacher = multer({storage: storageConfigTeacher});


const fileRouter = express.Router();
fileRouter.all('/',        uploadStudent.single('file'), fileController.actionFileUpload);
fileRouter.all('/teacher', uploadTeacher.single('file'), fileController.actionFileUpload);
fileRouter.all('/delete',  fileController.actionFileDelete);

module.exports = fileRouter;
