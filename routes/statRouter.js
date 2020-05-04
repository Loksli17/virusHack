const express = require('express');
const statController = require('../controllers/statController');

const statRouter = express.Router();
statRouter.all('/', statController.actionIndex);

module.exports = statRouter;
