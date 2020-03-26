import { Sequelize, Options } from 'sequelize';
import TestUser from './testUser';

import config from '../config/config.json';

const dbConfig = config['development'];

const options: Options = {
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host,
  port: Number(dbConfig.port),
  dialect: 'mysql',
};

export const sequelize = new Sequelize(
  options.database || '',
  options.username || '',
  options.password,
  options,
);

const models = {
  TestUser,
};

export type Models = typeof models;
