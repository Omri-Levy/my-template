import supertest from 'supertest';
import app from '../../../server';
import db from '../../../db';
import User from '../../../models/User.model';

describe(`getUsers`, () => {
  it(`returns an array of all users`, async () => {
    const data = {
      fullName: `test test`,
      email: ``,
      password: `Createtest@1`,
    };
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 3; i++) {
      data.email = `test@test${i}.com`;
      // eslint-disable-next-line no-await-in-loop
      await User.create({
        fullName: data.fullName,
        email: data.email,
        password: `Create!@`,
      });
    }
    const { body } = await supertest(app).get(`/api/getUsers`).expect(200);

    expect(body).toHaveProperty(`status`, `success`);
    expect(body.users).toHaveLength(3);
  });

  // eslint-disable-next-line no-return-await
  afterAll(async () => {
    await User.truncate();
    await db.close();
  });
});
