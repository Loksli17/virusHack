const crypto     = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');

const User     = new UserModel();
const Exersice = new ExerciseModel();


exports.actionIndex = async(req, res) => {
    actionIndexStudent();

    let dates = DateModule.getDatesWeek();

    res.send(users);
}
exports.actionIndexTeacher = async(req, res) => {
    let
        datesWeek = DateModule.getDatesWeek(),
        exercises = [];

    exercises = Exersice.find('all', {
        // select : [
        //
        // ],
        where: [
            ['date >= ', datesWeek.firtsDate, 'AND'],
            ['date <= ', datesWeek.lastDate, ''],
        ],
        join: [
            [
                'inner', 'subject', 'subject.id = subject_id',
                'inner', 'user_has_subject', 'user_has_subject.subject_id = subject.id',
                'inner', 'user', 'user_has_subject.user_id = user.id'
            ],
        ],
    });
    res.send(req.session.userIndentity);
}

exports.actionIndexStudent = async(req, res) => {
    let
        datesWeek = DateModule.getDatesWeek(),
        exercises = [];

    exercises = Exersice.find('all', {
        // select : [
        //
        // ],
        where: [
            ['date >= ', datesWeek.firtsDate, 'AND'],
            ['date <= ', datesWeek.lastDate, ''],
        ],
        join: [
            [
                'inner', 'subject', 'subject.id = subject_id',
                'inner', 'user_has_subject', 'user_has_subject.subject_id = subject.id',
                'inner', 'user', 'user_has_subject.user_id = user.id'
            ],
        ],
    });
}

exports.actionIndexAdmin = async(req,res){
    
}
