const DateModule = require('./../lib/date.js');

const fs         = require('fs');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');

const Exercise = new ExerciseModel();
const File     = new FileModel();

exports.actionDelete = (req, res) => {
    if(!req.xhr){
        res.render('server/error', {
            layout : null,
            err    : 500,
            messege: "Iternal Server Error",
        });
        return;
    }

}

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
        file     = req.file,
        POST     = req.body,
        fileDb   = {};

    console.log(POST.idExercise);

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

    fileDb = {
        title      : file.filename,
        user_id    : req.session.userIndentity.id,
        exercise_id: POST.idExercise,
    }

    let result = File.save(fileDb);

    if(result){
        res.status(200);
        res.send();
    }else{
        res.status(500);
        res.send();
    }
}


exports.actionFileDelete = (req, res) => {
    if(!req.xhr){
        res.render('server/error', {
            layout : null,
            err    : 500,
            messege: "Iternal Server Error",
        });
        return;
    }

    const
        GET  = req.query;

    console.log(GET.filename, GET.path);
    res.send();
}
