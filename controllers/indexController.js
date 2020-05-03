const crypto     = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');

const User     = new UserModel();
const Exercise = new ExerciseModel();


exports.actionIndex = async(req, res) => {

    actionIndexStudent();

    let dates = DateModule.getDatesWeek();

    res.send(users);
}
exports.actionIndexTeacher = async(req, res) => {

    let
        datesWeek = DateModule.getDatesWeek(),
        exercises = [],
        firstDate = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate  = DateModule.formatDbDate(datesWeek.lastDate);

    console.log(datesWeek);

    exercises = await Exercise.find('all', {
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

    console.log(exercises);

    res.send(exercises);
}

exports.actionIndexStudent = async(req,res) =>{
    let
        datesWeek = DateModule.getDatesWeek(),
        exercises = [],
        firstDate = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate  = DateModule.formatDbDate(datesWeek.lastDate);

    console.log(datesWeek);

    exercises = await Exercise.find('all', {
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

    console.log(exercises);

    res.send(exercises);
}

exports.actionIndexAdmin = async(req,res) =>{
    return;
}
