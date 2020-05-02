const crypto    = require('crypto');

const UserModel = require('./../models/UserModel');

const User = new UserModel();

exports.actionIndex = async (req, res) => {
    console.log();
    let users = await User.find('all', {
        join:[
            ['inner', 'role', 'role_id = role.id'],
        ],
    });

    console.log(req.session.userIndentity);
    res.send(users);
}
