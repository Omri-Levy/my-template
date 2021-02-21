import { Response } from 'express';
import { apiUrl } from '@my-template/shared';
import { JwtToken } from './types';

const sendJwtToken = (res: Response, jwtToken: JwtToken) => {
  res.cookie(`qid`, jwtToken, {
    // 9 hours
    maxAge: 1000 * 60 * 60 * 9,
    httpOnly: true,
    sameSite: `lax`,
    path: `/`,
    secure: process.env.NODE_ENV === `production`,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 9),
    domain: process.env.NODE_ENV === `production` ? apiUrl : undefined,
  });
};

export default sendJwtToken;
