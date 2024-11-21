// config.d.ts
declare module 'config' {
    interface DatabaseConfig {
        host: string;
        port: number;
        username: string;
        password: string;
    }

    interface RedisConfig {
        host: string;
        port: number;
        db: number;
    }

    interface Config {
        env: 'development' | 'production';
        database: DatabaseConfig;
        redis: RedisConfig;
        apiKeys: Record<string, string>;
    }

    const config: Config;
    export default config;
}

export = config;
