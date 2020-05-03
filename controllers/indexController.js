const crypto     = require('crypto');
const DateModule = require('./../lib/date.js');

const UserModel = require('./../models/UserModel');

const User = new UserModel();

exports.actionIndex = async (req, res) => {
    let users = await User.find('all', {
        join:[
            ['inner', 'role', 'role_id = role.id'],
        ],
    });

    let dates = DateModule.getDatesWeek();

    res.send(users);
}
