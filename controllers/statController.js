const UserModel = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const GroupModel = require('./../models/GroupModel');
const ControlModel = require('./../models/ControlModel');

const User     = new UserModel();
const Exercise = new ExerciseModel();
const Group    = new GroupModel();
const Control  = new ControlModel();

exports.actionIndex = async (req, res) => {
    const
        GET = req.query;

    let
        counExercise  = 0,
        id            = GET.id,
        users         = [],
        students      = [],
        counUsers     = 0,
        counterPass   = 0,
        counterPres   = 0;

    counExercise = await Exercise.find('all', {
        where: [
            ['group_id = ', id, ''],
        ],
    });

    counExercise = counExercise.length;

    users = await Control.find('all', {
        select: [
            'user.lastname',
            'control.pass as pass',
            'control.exercise_id as exerId',
            'control.presence as presence',
        ],
        join: [
            ['inner', 'user', 'user.id = user_id'],
            ['inner', 'group', 'user.group_id = group.id'],
        ],
        where: [
            ['group.id = ', id, ''],
        ],
    });

    counUsers = users.length / counExercise;

    let coun = 0;
    for(let i = 0; i < users.length; i++){
        if(users[i].presence) counterPres++;
        if(users[i].pass) counterPass++;
        coun++;
        if(coun == counExercise - 1){
            students.push({
                user: users[i].lastname,
                pass: counterPass,
                pres: counterPres,
            });
            counterPass = 0;
            counterPres = 0;
            coun = 0;
        }
    }

    for(let i = 1; i < counUsers; i++){
        for(let j = 1; j < counExercise; j++){
            console.log(i * j);
            if(users[i * j].presence) counterPres++;
            if(users[i * j].pass) counterPass++;
        }

        counterPass = 0;
        counterPres = 0;
    }

    res.send({students: students});
}
