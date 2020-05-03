const crypto = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');

const User = new UserModel();
const Exercise = new ExerciseModel();


exports.actionIndex = async (req, res) => {

}


exports.actionIndexTeacher = async (req, res) => {

}


exports.actionIndexStudent = async (req, res) => {
    let
<<<<<<< HEAD
        datesWeek   = DateModule.getDatesWeek(),
        exercises   = [],
        exerView    = [{}, {}, {}, {}, {}, {}],
        firstDate   = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate    = DateModule.formatDbDate(datesWeek.lastDate),
        file        =
=======
        datesWeek = DateModule.getDatesWeek(),
        exercises = [],
        exerView = [{}, {}, {}, {}, {}, {}],
        firstDate = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate = DateModule.formatDbDate(datesWeek.lastDate),
>>>>>>> 33f82b0604fc2b77bd32fa3b20a40d7e9695ce41
        currentDate = new Date();


    exercises = await Exercise.find('all', {
        select: [
            'exercise.id as id',
            'exercise.date as date',
            'exercise.time as time',
            'exercise.number as number',
            'subject.title as subTitle',
            'subject.id',
            'user.firstname as teacherFirstName',
            'user.lastname as teacherLastName',
            'user.patronyc as teacherPatronyc',
        ],
        where: [
            ['date >= ', firstDate, 'AND'],
            ['date >= ', firstDate, ''],
        ],
        join: [
            ['inner', 'subject', 'subject.id = subject_id'],
            ['inner', 'user_has_subject', 'user_has_subject.subject_id = subject.id'],
            ['inner', 'user', 'user_has_subject.user_id = user.id'],
        ],
    });

    for (let i = 0; i < exerView.length; i++) {
        if (currentDate.getDay() - 1 == i) {
            exerView[i].current = true;
        }
        exerView[i].exercises = [];
        for (let j = 0; j < 5; j++) {
            exerView[i].exercises.push({
                id: 0,
                time: '',
                subTitle: '',
                teacher: '',
                number: '',
            });
        }
    }

    for (let i = 0; i < exercises.length; i++) {
        let
            date = new Date(exercises[i].date),
            day = date.getDay();

        exerView[day - 1].exercises[exercises[i].number - 1].id = exercises[i].id;
        exerView[day - 1].exercises[exercises[i].number - 1].time = exercises[i].time;
        exerView[day - 1].exercises[exercises[i].number - 1].number = exercises[i].number;
        exerView[day - 1].exercises[exercises[i].number - 1].subTitle = exercises[i].subTitle;
        exerView[day - 1].exercises[exercises[i].number - 1].teacher = exercises[i].teacherLastName + exercises[i].teacherFirstName.substr(0, 1) + '. ' + exercises[i].teacherPatronyc.substr(0, 1) + '. ';
    }

    res.render('index/student', {
        exerView: exerView,
        exercises: JSON.stringify(exercises),
    });
}

<<<<<<< HEAD

exports.actionIndexAdmin = async(req, res) => {
=======
exports.actionIndexAdmin = async (req, res) => {
>>>>>>> 33f82b0604fc2b77bd32fa3b20a40d7e9695ce41

}