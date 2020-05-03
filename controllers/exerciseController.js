const DateModule = require('./../lib/date.js');

const UserModel     = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const FileModel     = require('./../models/FileModel');

const Exercise = new ExerciseModel();
const File     = new FileModel();


exports.actionView = async (req, res) => {

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

    let exercise = {};

    exercise.findById(id);

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
            layout  : 'admin',
            csrf    : res.locals._csrfToken,
            roles   : roles,
            action  : 'edit?id=' + id,
            fields  : exercise.fields,
            formData: user,
        });
        return;
    }


}
