import { JwtToken, JwtTokenExtractor } from './types';

const jwtTokenExtractor: JwtTokenExtractor = (req) => {
  let jwtToken: JwtToken = null;

  if (req && req?.headers?.cookie) {
    const { cookie } = req?.headers;

    jwtToken = cookie?.split(`qid=`)[1];
    console.log(jwtToken);
  }

  return jwtToken;
};

export default jwtTokenExtractor;
