const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function ExersiceModel(){
    tableName = 'exersice';
    modelMysql.call(this, tableName);
}

//наследование
ExersiceModel.prototype = Object.create(modelMysql.prototype);
ExersiceModel.prototype.constructor = ExersiceModel;

ExersiceModel.prototype.rules = {
    integer : ['group_id', 'subject_id'],
    string  : ['time'],
    required: ['date', 'time', 'group_id', 'subject_id'],
};

ExersiceModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

ExersiceModel.prototype.fields = {
    id        : 'ID',
    date      : 'Фамилия',
    time      : 'Имя',
    group_id  : 'Группа',
    subject_id: 'Роль пользователя',
}

ExersiceModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = ExersiceModel;
