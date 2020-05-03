const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function UserHasSubjectModel(){
    tableName = 'user_has_subject';
    modelMysql.call(this, tableName);
}

//наследование
UserHasSubjectModel.prototype = Object.create(modelMysql.prototype);
UserHasSubjectModel.prototype.constructor = UserHasSubjectModel;

UserHasSubjectModel.prototype.rules = {
    integer : ['user_id',  'subject_id'],
};

UserHasSubjectModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

UserHasSubjectModel.prototype.fields = {
    id        : 'ID',
    user_id   : 'Пользователь',
    subject_id: 'Предмет пользователя'
}

UserHasSubjectModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = UserHasSubjectModel;
