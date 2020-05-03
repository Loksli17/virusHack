const crypto = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');

const Exercise = new ExerciseModel();
const File     = new FileModel();


exports.actionFileUpload = (req, res) => {
    if(!req.xhr){
        res.render('server/error', {
            layout : null,
            err    : 500,
            messege: "Iternal Server Error",
        });
        return;
    }

    let
        file = req.file,
        POST = req.body;

    if(file.mimetype != 'application/pdf' && file.mimetype != 'application/zip' && file.mimetype != 'application/msword'){
        res.status(500);
        res.send();
        return;
    }

    if(file.size > 8 * 1024 * 1024 * 10){
        res.status(500);
        res.send();
        return;
    }
}
