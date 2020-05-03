const crypto = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');

const User     = new UserModel();
const Exercise = new ExerciseModel();
const File     = new FileModel();


exports.actionIndex = async (req, res) => {

}


exports.actionIndexTeacher = async (req, res) => {
    let
        datesWeek   = DateModule.getDatesWeek(),
        exercises   = [],
        exerView    = [{}, {}, {}, {}, {}, {}],
        firstDate   = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate    = DateModule.formatDbDate(datesWeek.lastDate),
        currentDate = new Date();

    exercises = await Exercise.find('all', {
        select : [
            'exercise.id as id',
            'exercise.date as date',
            'exercise.time as time',
            'exercise.number as number',
            'subject.title as subTitle',
            'subject.id',
            'user.firstname as teacherFirstName',
            'user.lastname as teacherLastName',
            'user.patronyc as teacherPatronyc',
            'group.title as gtitle'
        ],
        where: [
            ['user.id = ', req.session.userIndentity.id,' AND '],
            ['date >= ', firstDate, 'AND'],
            ['date >= ', firstDate, ''],
        ],
        join: [
            ['inner', 'group', 'exercise.group_id = group.id'],
            ['inner', 'subject', 'subject.id = exercise.subject_id'],
            ['inner', 'user_has_subject', 'user_has_subject.subject_id = subject.id'],
            ['inner', 'user', 'user_has_subject.user_id = user.id'],
        ],
    });
    console.log(exercises);

    for(let i = 0; i < exerView.length; i++){
        if(currentDate.getDay() - 1 == i){
            exerView[i].current = true;
        }
        exerView[i].exercises = [];
        for(let j = 0; j < 5; j++){
            exerView[i].exercises.push({
                id      : 0,
                time    : '',
                subTitle: '',
                teacher : '',
                number  : '',
                gtitle  : '',
            });
        }
    }

    for(let i = 0; i < exercises.length; i++){
        let
            date = new Date(exercises[i].date),
            day  = date.getDay();

        exerView[day - 1].exercises[exercises[i].number - 1].id       = exercises[i].id;
        exerView[day - 1].exercises[exercises[i].number - 1].time     = exercises[i].time;
        exerView[day - 1].exercises[exercises[i].number - 1].number   = exercises[i].number;
        exerView[day - 1].exercises[exercises[i].number - 1].subTitle = exercises[i].subTitle;
        exerView[day - 1].exercises[exercises[i].number - 1].gtitle   = exercises[i].gtitle;
        exerView[day - 1].exercises[exercises[i].number - 1].teacher  = exercises[i].teacherLastName + exercises[i].teacherFirstName.substr(0, 1) + '. ' + exercises[i].teacherPatronyc.substr(0, 1) + '. ';
    }

    res.render('index/student', {
        exerView : exerView,
        exercises: exercises,
    });
}


exports.actionIndexStudent = async (req, res) => {
    let
        datesWeek   = DateModule.getDatesWeek(),
        exercises   = [],
        exerView    = [{}, {}, {}, {}, {}, {}],
        firstDate   = DateModule.formatDbDate(datesWeek.firstDate),
        lastDate    = DateModule.formatDbDate(datesWeek.lastDate),
        currentDate = new Date();


    exercises = await Exercise.find('all', {
        select: [
            'exercise.id as id',
            'exercise.date as date',
            'exercise.time as time',
            'exercise.number as number',
            'exercise.desc as description',
            'subject.title as subTitle',
            'subject.id as subId',
            'user.id as teacherId',
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
            day  = date.getDay(),
            file = {};

        exerView[day - 1].exercises[exercises[i].number - 1].id = exercises[i].id;
        exerView[day - 1].exercises[exercises[i].number - 1].time = exercises[i].time;
        exerView[day - 1].exercises[exercises[i].number - 1].number = exercises[i].number;
        exerView[day - 1].exercises[exercises[i].number - 1].subTitle = exercises[i].subTitle;
        exerView[day - 1].exercises[exercises[i].number - 1].teacher = exercises[i].teacherLastName + exercises[i].teacherFirstName.substr(0, 1) + '. ' + exercises[i].teacherPatronyc.substr(0, 1) + '. ';

        files = await File.find('all', {
            select: ['title'],
            where : [
                ['user_id = ', exercises[i].teacherId, 'AND'],
                ['exercise_id =', exercises[i].id, ''],
            ]
        });

        exercises[i].files = [];

        for(j = 0; j < files.length; j++){
            exercises[i].files.push(files[j].title);
        }

    }

    res.render('index/student', {
        exerView: exerView,
        exercises: JSON.stringify(exercises),
    });
}


exports.actionIndexAdmin = async(req, res) => {

}
