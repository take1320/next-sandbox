import { Options } from 'sequelize';

export const options: Options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
};

export const localOptions = {
  username: 'test',
  password: 'password',
  database: 'database',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
};
