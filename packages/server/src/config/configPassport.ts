import passportJwt from 'passport-jwt';
import { Request } from 'express';
import passport from 'passport';
import dotenv from 'dotenv-safe';
import User from '../models/User.model';
import { JwtToken } from '../utils/types';

const configPassport = (): void => {
  dotenv.config();
  const JwtStrategy = passportJwt.Strategy;
  const { JWT_SECRET } = process.env;
  const cookieExtractor = (req: Request) => {
    let jwtToken: JwtToken = null;

    if (req && req.headers.cookie) {
      const { cookie } = req.headers;
      jwtToken = cookie?.split(`qid=`)[1];
    }

    return jwtToken;
  };
  const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: JWT_SECRET,
  };
  const strategy = new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await User.findOne({
        attributes: {
          exclude: [`password`, `createdAt`, `updatedAt`, `tokenVersion`],
        },
        where: { id: jwtPayload.id },
      });

      if (!user) {
        return done(null);
      }

      return done(null, user);
    } catch (error) {
      console.error(error);

      return done(error);
    }
  });

  passport.use(strategy);
};

export default configPassport;
