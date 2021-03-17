import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

const { PGUSER, PGPASSWORD, PGDATABASE } = process.env;
const options: SequelizeOptions = {
  dialect: `postgres`,
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  models: [`${__dirname}/**/*.model.ts`],
};
const db = new Sequelize(options);
(async () => {
  await db.sync();
})();

export default db;

