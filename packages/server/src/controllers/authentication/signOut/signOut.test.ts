import supertest from 'supertest';
import { verify } from 'argon2';
import app from '../../../server';
import User from '../../../models/User.model';
import db from '../../../db';

describe(`signOut`, () => {
  it(`signs out`, async () => {
    const data = {
      email: `test@test.com`,
      password: `Createtest@1`,
    };
    const { body } = await supertest(app)
      .post(`/api/signOut`)
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
    expect(newUser).toHaveProperty(`email`, data.email);
    expect(isSamePassword).toBe(true);
  });

  afterAll(async () => {
    await User.truncate();
    await db.close();
  });
});
