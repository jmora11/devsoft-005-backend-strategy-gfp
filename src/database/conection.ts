import debugLib from 'debug';
import { Sequelize } from 'sequelize';
import config from '../config';

const debug = debugLib('gfp:ConectionMysql');

export const sequelizeMySQL = new Sequelize(
  config.bdName,
  config.bdUserName,
  config.bdPass,
  {
    dialect: 'mysql',
    host: config.bdHost,
    logging: false,
    pool: {
      acquire: 30000,
      idle: 10000,
      max: 5,
      min: 0
    },
    port: config.bdPort as number
  }
);

sequelizeMySQL
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch((err: any) => {
    debug('Unable to connect to the database:', err);
  });