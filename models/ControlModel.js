const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function ControlModel(){
    tableName = 'control';
    modelMysql.call(this, tableName);
}

//наследование
ControlModel.prototype = Object.create(modelMysql.prototype);
ControlModel.prototype.constructor = ControlModel;

ControlModel.prototype.rules = {
    integer : ['pass', 'presence','user_id','exercise_id'],
    required: ['id'],
};

ControlModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

ControlModel.prototype.fields = {
    id       : 'ID',
    presence : 'Присутствие',
    pass     : 'Сдача',
    user_id  : 'Id пользователя',
    exercise_id :'Id занятия'
}

ControlModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = ControlModel;
