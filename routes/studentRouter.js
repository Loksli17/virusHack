const express = require('express');
const indexController = require('../controllers/indexController');

const studentRouter = express.Router();
studentRouter.all('/', indexController.actionIndexStudent);

module.exports = studentRouter;
