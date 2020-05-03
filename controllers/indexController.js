const crypto    = require('crypto');

const UserModel = require('./../models/UserModel');

const User = new UserModel();

exports.actionIndex = async (req, res) => {
    let users = await User.find('all', {
        join:[
            ['inner', 'role', 'role_id = role.id'],
        ],
    });

    date = new Date();
    console.log(date.getDay())

    res.send(users);
}
