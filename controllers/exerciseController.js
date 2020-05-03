const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');

const Exercise = new ExerciseModel();
const File     = new FileModel();


exports.actionView = async (req, res) => {
    let id = req.query.id;
    id  = Number(id);
    console.log(id);

    if (id != undefined){
        
    }
}

exports.actionEdit = async (req, res) => {

}
