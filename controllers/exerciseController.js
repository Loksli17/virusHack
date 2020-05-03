const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');
const GroupModel    = require('./../models/GroupModel');

const Exercise = new ExerciseModel();
const File     = new FileModel();
const Group    = new GroupModel();
const User     = new UserModel();

exports.actionView = async (req, res) => {
    let users = {};
    const
        GET  = req.query;


    if(GET.id == undefined){
        res.render('server/error.hbs', {
            layout :  null,
            code   : '404',
            messege: 'Страница не найдена',
        });
        return;
    }

    let
        id = Number(GET.id);
    console.log("id = "+id);
    if(isNaN(id)){
        id = 1;
    }
    users = await User.find('all', {
        select: [
            'user.id as Id',
            'user.firstname',
            'user.lastname',
            //'file.title as ftitle',
            'group.title as gtitle',
            'user.role_id',
            'exercise.id as exID',
        ],
        group : 'Id',
        where: [
            ['user.role_id =','4',' AND '],
            ['exercise.id = ',id, '']
        ],
        join : [
            ['left', 'file', 'file.user_id = user.id'],
            ['inner' ,'group', 'user.group_id = group.id'],
            ['inner', 'exercise', 'exercise.group_id = group.id'],
        ]
    })

    console.log(users.length);
    res.render('exercise/view', {
        users : users,
    })

}

exports.actionEdit = async (req, res) => {
    const
        GET  = req.query,
        POST = req.body;

    if(GET.id == undefined){
        res.render('server/error.hbs', {
            layout :  null,
            code   : '404',
            messege: 'Страница не найдена',
        });
        return;
    }

    let
        id = Number(GET.id);

    if(isNaN(id)){
        id = 1;
    }

    let
        exercise = await Exercise.findById(id),
        files    = await File
    console.log(exercise);

    if(exercise == undefined){
        res.render('server/error.hbs', {
            layout :  null,
            code   : '404',
            messege: 'Страница не найдена',
        });
        return;
    }

    if(POST.do == undefined){
        res.render('exercise/edit', {
            csrf    : res.locals._csrfToken,
            action  : 'edit?id=' + id,
            fields  : exercise.fields,
            formData: exercise,
        });
        return;
    }


}
