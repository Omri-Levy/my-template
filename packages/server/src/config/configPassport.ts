import passportJwt from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv-safe';
import User from '../models/User.model';
import jwtTokenExtractor from '../utils/jwtTokenExtractor';

const configPassport = (): void => {
  dotenv.config();
  const JwtStrategy = passportJwt.Strategy;
  const { JWT_SECRET } = process.env;
  const options = {
    jwtFromRequest: jwtTokenExtractor,
    secretOrKey: JWT_SECRET,
  };
  const strategy = new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await User.findOne({
        attributes: {
          exclude: [`password`, `createdAt`, `updatedAt`],
        },
        where: { id: jwtPayload.id },
      });

      if (!user || user?.tokenVersion !== jwtPayload.tokenVersion) {
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
