const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');
const GroupModel    = require('./../models/GroupModel');
const ControlModel  = require('./../models/ControlModel');

const Exercise = new ExerciseModel();
const File     = new FileModel();
const Group    = new GroupModel();
const User     = new UserModel();
const Control  = new ControlModel();


exports.actionPresence = async (req, res) => {
    let control = {};

    if(!req.xhr){
        res.render('server/error', {
            layout : null,
            err    : 500,
            messege: "Iternal Server Error",
        });
        return;
    }

    const
        GET  = req.query;

    console.log(GET);
    control = await Control.find('one',{
        where : [
            ['user_id = ', GET.idUser, 'AND'],
            ['exercise_id = ', GET.idExercise,'']
        ]
    })

    if (control.presence == 0){
        await Control.query("UPDATE control SET presence = 1 WHERE id =" + control.id);
    }else{
        await Control.query("UPDATE control SET presence = 0 WHERE id =" + control.id);
    }


    res.send();
}

exports.actionPass = async (req, res) => {
    let control = {};

    if(!req.xhr){
        res.render('server/error', {
            layout : null,
            err    : 500,
            messege: "Iternal Server Error",
        });
        return;
    }

    const
        GET  = req.query;

    console.log(GET);
    control = await Control.find('one',{
        where : [
            ['user_id = ', GET.idUser, 'AND'],
            ['exercise_id = ', GET.idExercise,'']
        ]
    })

    if (control.pass == 0){
        await Control.query("UPDATE control SET pass = 1 WHERE id =" + control.id);
    }else{
        await Control.query("UPDATE control SET pass = 0 WHERE id =" + control.id);
    }
}

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

    console.log("id = " + id);

    if(isNaN(id)){
        id = 1;
    }

    users = await User.find('all', {
        select: [
            'user.id as Id',
            'user.firstname',
            'user.lastname',
            'user.patronyc',
            'file.title as ftitle',
            'group.title as gtitle',
            'user.role_id',
            'exercise.id as exID',
            'file.title as fTitle',
            'control.presence',
            'control.pass',
        ],
        group : 'Id',
        where: [
            ['user.role_id =', '4', ' AND '],
            ['exercise.id = ', id, '']
        ],
        join : [

            ['left', 'file', 'file.user_id = user.id'],
            ['inner' ,'group', 'user.group_id = group.id'],
            ['inner', 'exercise', 'exercise.group_id = group.id'],
            ['inner', 'control', 'control.user_id = user.id'],
        ]
    })

    for(let i = 0; i < users.length; i++){
        users[i].num = i + 1;
        users[i].idExer = id;
        if (users[i].presence == 0){
            delete users[i].persence;
        }
        if (users[i].pass == 0){
            delete users[i].pass;
        }
    }

    group = users[0].gtitle;

    res.render('exercise/view', {
        users: users,
        group: group,
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
        files    = await File.find('all', {
            where: [
                ['exercise_id = ', exercise.id, 'AND'],
                ['user_id = ', req.session.userIndentity.id, ''],
            ]
        });

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
            action    : 'edit?id=' + id,
            fields    : Exercise.fields,
            formData  : exercise,
            files     : files,
            exerciseId: id,
        });
        return;
    }

    exerciseForm = POST.exercise;
    exercise.date = DateModule.formatDbDate(exercise.date);
    exercise.link = exerciseForm.link;
    exercise.desc = exerciseForm.desc;

    let save = Exercise.save(exercise, exercise.id);
    if(save){
        res.redirect('/teacher');
    }else{
        res.render('server/error.hbs', {
            action    : 'edit?id=' + id,
            fields    : Exercise.fields,
            formData  : exercise,
            files     : files,
            exerciseId: id,
        });
    }
}

exports.fileDelete = async (req, res) => {

}
