import passportJwt from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv-safe';
import jwtTokenExtractor from '../utils/jwtTokenExtractor';
import getCurrentUserCache from '../utils/currentUserCache/getCurrentUserCache';
import resetCurrentUserAndUsersCache from '../utils/resetCurrentUserAndUsersCache';

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
      let currentUser = await getCurrentUserCache();

      if (
        !currentUser ||
        currentUser?.tokenVersion !== jwtPayload.tokenVersion
      ) {
        if (currentUser) {
          await resetCurrentUserAndUsersCache();
        }

        return done(null);
      }

      const {
        id,
        email,
        firstName,
        lastName,
        role,
        tokenVersion,
      } = currentUser;
      currentUser = {
        id,
        email,
        firstName,
        lastName,
        role,
        tokenVersion,
      };

      return done(null, currentUser);
    } catch (error) {
      console.error(error);

      await resetCurrentUserAndUsersCache();

      return done(error);
    }
  });

  passport.use(strategy);
};

export default configPassport;
