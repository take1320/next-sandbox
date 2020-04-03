import { Sequelize, Options } from 'sequelize';

import config from '../../../db/config/config.json';

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
