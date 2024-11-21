// 使用配置
import config from './config';

const dbConfig = config.database;
const redisConfig = config.redis;
const apiKey = config.apiKeys['service1'];

console.log(dbConfig)
console.log(redisConfig)
console.log(apiKey)