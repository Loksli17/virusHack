const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function GroupModel(){
    tableName = 'virushack.groups';
    modelMysql.call(this, tableName);
}

//наследование
GroupModel.prototype = Object.create(modelMysql.prototype);
GroupModel.prototype.constructor = GroupModel;

GroupModel.prototype.rules = {
    string  : ['title'],
    integer : ['course_id'],
};

GroupModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

GroupModel.prototype.fields = {
    id        : 'ID',
    title     : 'Группа',
    course_id : 'ID курса'
}

GroupModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = GroupModel;
