const crypto     = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExersiceModel = require('./../models/ExersiceModel');

const User     = new UserModel();
const Exersice = new ExersiceModel();


exports.actionIndex = async(req, res) => {
    actionIndexStudent();

    let dates = DateModule.getDatesWeek();

    res.send(users);
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
                'inner'', 'user', 'user_has_subject.user_id = user.id'
            ],
        ],
    });

}
