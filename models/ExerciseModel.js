const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function ExerciseModel(){
    tableName = 'exercise';
    modelMysql.call(this, tableName);
}

//наследование
ExerciseModel.prototype = Object.create(modelMysql.prototype);
ExerciseModel.prototype.constructor = ExerciseModel;

ExerciseModel.prototype.rules = {
    integer : ['group_id', 'subject_id'],
    string  : ['time'],
    required: ['date', 'time', 'group_id', 'subject_id'],
};

ExerciseModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

ExerciseModel.prototype.fields = {
    id        : 'ID',
    date      : 'Фамилия',
    time      : 'Имя',
    group_id  : 'Группа',
    subject_id: 'Роль пользователя',
}

ExerciseModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = ExerciseModel;
