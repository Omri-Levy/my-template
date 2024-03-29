import supertest from 'supertest';
import { verify } from 'argon2';
import app from '../../../server';
import User from '../../../models/User.model';
import db from '../../../db';

describe(`signIn`, () => {
  it(`signs in`, async () => {
    const data = {
      email: `test@test.com`,
      password: `Createtest@1`,
    };
    const { body } = await supertest(app)
      .post(`/api/signIn`)
      .send(data)
      .expect(200);
    expect(body).toMatchObject({ status: `success` });

    const newUser = await User.findOne({
      where: { email: data.email },
    });
    let isSamePassword;

    if (newUser?.password) {
      isSamePassword = await verify(newUser?.password, data.password);
    }

    expect(newUser).toHaveProperty(`id`);
    expect(newUser).toHaveProperty(`email`, data.email);
    expect(isSamePassword).toBe(true);
  });

  afterAll(async () => {
    await User.truncate();
    await db.close();
  });
});
