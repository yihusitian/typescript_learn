// config.js
const config = {
    env: 'development',
    database: {
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456'
    },
    redis: {
        host: 'localhost',
        port: 6379,
        db: 0
    },
    apiKeys: {
        service1: 'key1',
        service2: 'key2'
    }
};

module.exports = config;