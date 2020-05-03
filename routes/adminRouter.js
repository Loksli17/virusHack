const express = require('express');
const indexController = require('../controllers/indexController');

const adminRouter = express.Router();
adminRouter.all('/', indexController.actionIndexAdmin);

module.exports = adminRouter;
