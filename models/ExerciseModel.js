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
    required: ['link', 'desc'],
};

ExerciseModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

ExerciseModel.prototype.fields = {
    id  :'ID',
    desc: 'Описание занятия',
    link: 'Сcылка на занятие',
}

ExerciseModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = ExerciseModel;
