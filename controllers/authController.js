const crypto    = require('crypto');
const config    = require('./../config');

const UserModel = require('./../models/UserModel');


const User = new UserModel();


exports.actionLogin = async (req, res) => {

    if(res.locals.user != undefined){
        res.redirect('/');
        return;
    }

    let post = req.body,
        user = {};
    const {email, password, rememberMe} = post;

    //проверка пришли ли данные
    if(JSON.stringify(post) == "{}"){
        res.render('auth/login', {
            layout: null,
        });
        return;
    }

    if(email == '' || password == ''){
        res.render('auth/login', {
            layout: null,
            error : "Есть пустые поля",
        });
        return;
    }

    user = await User.find('one', {
        where: [
            ['email = ', email, ''],
        ],
    });
    console.log(email, password);

    if(user == null){
        res.render('auth/login', {
            layout: null,
            error : "Неверное имя пользователя или пароль",
        });
        return;
    }

    let hash = crypto.createHash('sha256', config.user.passSecret).update(password).digest('hex');
    if(hash != user.pass){
        res.render('auth/login', {
            layout: null,
            error : "Неверное имя пользователя или пароль",
        });
        return;
    }

    //запомнить меня
    if(rememberMe != undefined){
        let token = Math.round((new Date().valueOf() * Math.random())) + '',
            series = Math.round((new Date().valueOf() * Math.random())) + '';

        res.cookie(
            'authToken',
            {
                id    : user.id,
                token : token,
                series: series
            },
            {
                expires: new Date(Date.now() + 2 * 604800000),
            }
         );

         user.token = token;
         user.series = series;

         await User.save(user, user.id);
    }else{
        user.token = '';
        user.series = '';
        await User.save(user, user.id);
    }

    console.log(`user ${user.name} was authed`);
    req.session.userIndentity = user;
    res.redirect('/');
};


exports.actionLogout = (req, res) => {
    delete req.session.userIndentity;
    res.clearCookie('authToken');
    res.redirect('/auth/login');
}


exports.actionSignup = async (req, res) => {

    if(res.locals.user != undefined){
        res.redirect('/');
        return;
    }

    let post    = req.body,
        newUser = {
            name: {
                firstName : '',
                secondName: '',
            },
            email : "",
            pass  : "",
            series: '',
            token : '',
        }

    const {email, firstName, secondName, password, passwordTwo, dateBorn} = post;

    if(JSON.stringify(post) == "{}"){
        res.render('auth/signup', {
            layout: null,
        });
        return;
    }

    if(
        email       == '' ||
        dateBorn    == '' ||
        firstName   == '' ||
        secondName  == '' ||
        password    == '' ||
        passwordTwo == ''
    ){
        res.render('auth/signup', {
            error : 'Есть пустые поля',
            layout: null,
        });
    }

    let checkEmail = await User.find('one', {
        where: [
            ['email = ', email, ''],
        ],
    });

    if(checkEmail != null){
        res.render('auth/signup', {
            layout: null,
            error: 'Email занят, если это ваш e-mail авторизуйтесь',
        });
    }

    if(password != passwordTwo){
        res.render('auth/signup', {
            layout: null,
            error: 'Введенные парооли не совпадают',
        });
    }

    newUser.name.firstName  = firstName.toLowerCase();
    newUser.name.secondName = secondName.toLowerCase();
    newUser.email           = email.toLowerCase();
    newUser.pass            = crypto.createHash('sha256', config.user.passSecret).update(password).digest('hex');
    newUser.dateBorn        = dateBorn;
    newUser.img             = 'default.png';

    await User.save(newUser);

    req.session.userIndentity = newUser;
    res.redirect('/');
}
