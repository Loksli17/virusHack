const crypto     = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');

const User     = new UserModel();
const Exercise = new ExerciseModel();


exports.actionIndex = async (req, res) => {

}


exports.actionIndexTeacher = async (req, res) => {

}


exports.actionIndexStudent = async (req, res) => {
    let
        datesWeek = DateModule.getDatesWeek(),
        exercises = [],
        exerView  = [[], [], [], [], [], []],
        firstDate = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate  = DateModule.formatDbDate(datesWeek.lastDate);

    console.log(lastDate, firstDate);

    exercises = await Exercise.find('all', {
        select : [
            'exercise.id as id',
            'exercise.date as date',
            'exercise.time as time',
            'subject.title as subTitle',
            'user.firstname as teacherFirstName',
            'user.lastname as teacherLastName',
            'user.patronyc as teacherPatronyc',
        ],
        where: [
            ['date >= ', firstDate, 'AND'],
            ['date >= ', firstDate, ''],
        ],
        join: [
            [
                'inner', 'subject', 'subject.id = subject_id',
                'inner', 'user_has_subject', 'user_has_subject.subject_id = subject.id',
                'inner', 'user', 'user_has_subject.user_id = user.id'
            ],
        ],
    });

    for(let i = 0; i < exerView.length; i++){
        for(let j = 0; j < 5; j++){
<<<<<<< HEAD

=======
            exerView[i].exercises.push({
                id      : 0,
                time    : '',
                subTitle: '',
                teacher : '',
                number  : '',
            });
>>>>>>> 36e7f1d7df23c268ba815f732a8b98913a4303a9
        }
    }

    for(let i = 0; i < exercises.length; i++){
<<<<<<< HEAD
        let date = new Date(exercises[i].date);
        switch(date.getDay()){
            case 1:

        }
    }

    res.send(exercises);
=======
        let
            date = new Date(exercises[i].date),
            day  = date.getDay();

        exerView[day - 1].exercises[exercises[i].number - 1].id       = exercises[i].id;
        exerView[day - 1].exercises[exercises[i].number - 1].time     = exercises[i].time;
        exerView[day - 1].exercises[exercises[i].number - 1].number   = exercises[i].number;
        exerView[day - 1].exercises[exercises[i].number - 1].subTitle = exercises[i].subTitle;
        exerView[day - 1].exercises[exercises[i].number - 1].teacher  = exercises[i].teacherLastName + exercises[i].teacherFirstName.substr(0, 1) + '. ' + exercises[i].teacherPatronyc.substr(0, 1) + '. ';
    }

    res.render('index/student', {
        exerView : exerView,
        exercises: exercises,
    });
>>>>>>> 36e7f1d7df23c268ba815f732a8b98913a4303a9
}

exports.actionIndexAdmin = async(req, res) => {

}
