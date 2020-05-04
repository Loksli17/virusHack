const UserModel = require('./../models/UserModel');
const ExerciseModel = require('./../models/ExerciseModel');
const GroupModel = require('./../models/GroupModel');

const User     = new UserModel();
const Exercise = new ExerciseModel();
const Group    = new GroupModel();


exports.actionIndex = async (req, res) => {
    const
        GET = req.query;

    let
        counExercise  = 0,
        id            = GET.id,
        students      = [];

    counExercise = await Exercise.find('all', {
        where: [
            ['group_id = ', id, ''],
        ],
    });

    counExercise = counExercise.length;

    console.log(counExercise);

    res.send(counExercise);
}
