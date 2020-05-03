const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function SubjectModel(){
    tableName = 'subject';
    modelMysql.call(this, tableName);
}

//наследование
SubjectModel.prototype = Object.create(modelMysql.prototype);
SubjectModel.prototype.constructor = SubjectModel;

SubjectModel.prototype.rules = {
    string  : ['title'],
};

SubjectModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

SubjectModel.prototype.fields = {
    id        : 'ID',
    title     : 'Предмет',
}

SubjectModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = SubjectModel;
