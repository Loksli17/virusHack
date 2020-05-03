const crypto     = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');

const User     = new UserModel();
const Exercise = new ExerciseModel();


<<<<<<< HEAD
exports.actionIndex = async(req, res) => {

    actionIndexStudent();
=======
exports.actionIndex = async (req, res) => {
>>>>>>> b8a3ff225d036e92c8850332c000498b9f614516

}


exports.actionIndexTeacher = async (req, res) => {

}
<<<<<<< HEAD
exports.actionIndexTeacher = async(req, res) => {

=======


exports.actionIndexStudent = async (req, res) => {
>>>>>>> b8a3ff225d036e92c8850332c000498b9f614516
    let
        datesWeek = DateModule.getDatesWeek(),
        exercises = [],
        firstDate = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate  = DateModule.formatDbDate(datesWeek.lastDate);

    console.log(lastDate, firstDate);

    exercises = await Exercise.find('all', {
        // select : [
        //
        // ],
        sql: true,
        where: [
            ['date between', firstDate + ' and ' + lastDate, ''],
        ],
        // join: [
        //     [
        //         'inner', 'subject', 'subject.id = subject_id',
        //         'inner', 'user_has_subject', 'user_has_subject.subject_id = subject.id',
        //         'inner', 'user', 'user_has_subject.user_id = user.id'
        //     ],
        // ],
    });
<<<<<<< HEAD

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
=======
>>>>>>> b8a3ff225d036e92c8850332c000498b9f614516

    console.log(exercises);

    res.send(exercises);
}

<<<<<<< HEAD
exports.actionIndexAdmin = async(req,res) =>{
    return;
=======
exports.actionIndexAdmin = async(req,res){

>>>>>>> b8a3ff225d036e92c8850332c000498b9f614516
}
