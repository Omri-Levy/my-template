import { Response } from 'express';
import { apiUrl, calculateHours } from '@my-template/shared';
import { JwtToken } from './types';

const sendJwtToken = (res: Response, jwtToken: JwtToken): void => {
  res.cookie(`qid`, jwtToken, {
    // 9 hours
    maxAge: calculateHours(9),
    httpOnly: true,
    sameSite: `lax`,
    path: `/`,
    secure: process.env.NODE_ENV === `production`,
    expires: new Date(Date.now() + calculateHours(9)),
    domain: process.env.NODE_ENV === `production` ? apiUrl : undefined,
  });
};

export default sendJwtToken;
