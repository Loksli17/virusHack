const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function CourseModel(){
    tableName = 'course';
    modelMysql.call(this, tableName);
}

//наследование
CourseModel.prototype = Object.create(modelMysql.prototype);
CourseModel.prototype.constructor = CourseModel;

CourseModel.prototype.rules = {
    string  : ['title'],

};

CourseModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

CourseModel.prototype.fields = {
    id        : 'ID',
    title     : 'Название курса',
}

CourseModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = CourseModel;
