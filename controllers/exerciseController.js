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
    console.log(files);

    if(POST.do == undefined){
        res.render('exercise/edit', {
            csrf    : res.locals._csrfToken,
            action  : 'edit?id=' + id,
            fields  : exercise.fields,
            formData: exercise,
            files   : files,
        });
        return;
    }

    // let save = 
}
