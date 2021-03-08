import { NextFunction, Request, Response } from 'express';
import User from '../models/User.model';

type JwtToken = string | null;
type SendEmail = (
  from: string,
  to: string,
  subject: string,
  text?: string,
  html?: string
) => void;
type Route = (req: Request, res: Response) => Promise<void> | void;
type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
type JwtTokenExtractor = (req: Request) => JwtToken;

interface JwtTokenPayload {
  id: string;
  tokenVersion: string;
}

type VerifyIfVerifiable = (
  user: User | null
) => (
  toVerifyAgainst: string | undefined,
  toVerify: string | undefined
) => Promise<boolean | null>;

export {
  JwtToken,
  SendEmail,
  Route,
  Middleware,
  JwtTokenExtractor,
  JwtTokenPayload,
  VerifyIfVerifiable,
};
