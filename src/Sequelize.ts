import { Sequelize as db } from 'sequelize-typescript';

export class Sequelize {
    host: string;
    port: number;
    dialect: string;
    database: string;
    username: string;
    password: string;

    public constructor(host: string,
        port: number,
        dialect: string,
        database: string,
        username: string,
        password: string) {
        this.dialect = 'mysql';
        this.host = host;
        this.port = port;
        this.dialect = dialect;
        this.database = database;
        this.username = username;
        this.password = password;
    }

    private definicionDB(): db {
        return new db({
            host: this.host,
            port: this.port,
            database: this.database,
            username: this.username,
            password: this.password,
            models: [__dirname + '/models']
        });
    }

    public conectarDB() {
        return this.definicionDB().sync({ force: false });
    }
}