import db from '../../../db';
import User from '../../../models/User.model';

describe(`getUser temp`, () => {
  it(`getUser temp`, async () => {
    expect(true).toBe(true);
  });

  // eslint-disable-next-line no-return-await
  afterAll(async () => {
    await User.truncate();
    await db.close();
  });
});
