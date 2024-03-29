import supertest from 'supertest';
import { verify } from 'argon2';
import app from '../../../server';
import User from '../../../models/User.model';
import db from '../../../db';

describe(`getUsers`, () => {
  it(`creates a single new user`, async () => {
    const data = {
      firstName: `test`,
      lastName: `test`,
      email: `test@test.com`,
      password: `Createtest@1`,
    };
    const { body } = await supertest(app)
      .post(`/api/signUp`)
      .send(data)
      .expect(200);
    expect(body).toMatchObject({ status: `success` });

    const newUser = await User.findOne({
      where: { email: data.email },
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isSamePassword = await verify(newUser?.password, data.password);

    expect(newUser).toHaveProperty(`id`);
    expect(newUser).toHaveProperty(`firstName`, data.firstName);
    expect(newUser).toHaveProperty(`lastName`, data.lastName);
    expect(newUser).toHaveProperty(`email`, data.email);
    expect(isSamePassword).toBe(true);
  });

  afterAll(async () => {
    await User.truncate();
    await db.close();
  });
});
