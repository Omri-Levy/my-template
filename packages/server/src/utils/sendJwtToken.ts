import { Response } from 'express';
import { apiUrl, calculateHours } from '@my-template/shared';
import { JwtToken } from './types';

const sendJwtToken = (res: Response, jwtToken: JwtToken): void => {
  const isProduction = process.env.NODE_ENV === `production`;

  res?.cookie(`qid`, jwtToken, {
    httpOnly: true,
    path: `/authenticate`,
    domain: isProduction ? apiUrl : undefined,
    sameSite: true,
    secure: isProduction,
    expires: new Date(Date.now() + calculateHours(9)),
  });
};

export default sendJwtToken;
