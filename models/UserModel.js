const modelMysql = require('../lib/Orm/mysqlOrm');

//model of tasks-mysql
function UserModel(){
    tableName = 'user';
    modelMysql.call(this, tableName);
}

//наследование
UserModel.prototype = Object.create(modelMysql.prototype);
UserModel.prototype.constructor = UserModel;

UserModel.prototype.rules = {
    integer : ['role_id',  'is_active', 'current_course_id'],
    string  : ['last_name', 'first_name', 'email', 'pass'],
    required: ['last_name', 'first_name', 'patronymic', 'email', 'phone', 'date_born', 'role_id'],
    date    : ['date_born'],
};

UserModel.prototype.rulesMesseges = {
    string  : 'Поле должно быть строкой',
    integer : 'Поле должно быть числом',
    date    : 'Поле должно иметь формат : DD-MM-YYYY',
    required: 'Данное поле является обязательным',
}

UserModel.prototype.fields = {
    id        : 'ID',
    last_name : 'Фамилия',
    first_name: 'Имя',
    patronymic: 'Отчество',
    email     : 'E-mail',
    phone     : 'Телефон',
    pass      : 'Пароль',
    date_born : 'Дата рождения',
    group_id  : 'Группа',
    role_id   : 'Роль пользователя',
}

UserModel.prototype.validateMessege = 'Ошибка отправки формы';

module.exports = UserModel;