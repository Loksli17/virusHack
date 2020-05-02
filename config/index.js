const settings = {
    db: {
        mysql:{
            host    : 'localhost',
            database: 'virusHack',
            user    : 'root',
            password: '1234',
        },
    },
    app: {
        port: 3000,
        name: 'virusHack',
    },
    cookie: {
        secret: '34Jmf7*8kL;>G',
    },
    session: {
        secret: 'GiU9%$3#kLz>',
    },
    user: {
        passSecret: '6Jhn-Nm<',
    }
}

module.exports = settings;
