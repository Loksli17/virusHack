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
            'subject.id',
            'user.firstname as teacherFirstName',
            'user.lastname as teacherLastName',
            'user.patronyc as teacherpatronyc',
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

    for(let i = 0; i < exerView.length; i++){
        for(let j = 0; j < 5; j++){
            exerView[]
        }
    }

    for(let i = 0; i < exercises.length; i++){
        let date = new Date(exercises[i].date);
        switch(date.getDay()){
            case 1:

        }
    }

    res.send(exercises);
}

exports.actionIndexAdmin = async(req, res) => {

}
