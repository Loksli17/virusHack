const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function RoleModel(){
    tableName = 'role';
    modelMysql.call(this, tableName);
}

//наследование
RoleModel.prototype = Object.create(modelMysql.prototype);
RoleModel.prototype.constructor = RoleModel;

RoleModel.prototype.rules = {
    string  : ['title'],
};

RoleModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

RoleModel.prototype.fields = {
    id        : 'ID',
    title     : 'Роль',
}

RoleModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = RoleModel;
