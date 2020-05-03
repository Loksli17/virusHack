const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function FileModel(){
    tableName = 'file';
    modelMysql.call(this, tableName);
}

//наследование
FileModel.prototype = Object.create(modelMysql.prototype);
FileModel.prototype.constructor = FileModel;

FileModel.prototype.rules = {
    integer : ['user_id', 'id', 'exercise_id'],
    string  : ['title'],
    required: ['title', 'user_id', 'exercise_id'],
};

FileModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

FileModel.prototype.fields = {
    id         : 'ID',
    title      : 'Название',
    user_id    : 'Пользователь',
    exercise_id: 'Пара',
}

FileModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = FileModel;
