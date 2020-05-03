const express = require('express');
const crypto  = require('crypto');
const multer  = require("multer");
const config  = require('./../config');

const fileController = require('../controllers/fileController');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/file/student');
    },
    filename: (req, file, cb) => {
        let type = file.mimetype.split('/'),
            rand = 0 + Math.random() * (20000 + 1 - 0),
            name = '';

        name = String(rand) + req.session.userIndentity.id;
        name = crypto.createHash('sha256', config.user.passSecret).update(name).digest('hex');
        cb(null, name + '.' +  type[1].toUpperCase());
    }
});
const upload = multer({storage: storageConfig});

const fileRouter = express.Router();
fileRouter.all('/', upload.single('file'), fileController.actionFileUpload);

module.exports = fileRouter;
