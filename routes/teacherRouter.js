const express = require('express');
const indexController = require('../controllers/indexController');

const teacherRouter = express.Router();
teacherRouter.all('/', indexController.actionIndexTeacher);

module.exports = teacherRouter;
