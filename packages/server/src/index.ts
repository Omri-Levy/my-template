import app from './server';
import db from './db';
import configPassport from './config/configPassport';

const { PORT } = process.env;

(async () => {
  try {
    await db.authenticate();
    console.log(`connected to db.`);
    configPassport();
    app.listen(PORT, () =>
      console.log(`listening at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
})();
