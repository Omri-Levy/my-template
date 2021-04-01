import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv-safe';
import cookieParser from 'cookie-parser';
import users from './routes/users';
import docs from './routes/docs';
import authentication from './routes/authentication';
import authorization from './routes/authorization';
import admins from './routes/admins';

dotenv.config();
const { CORS_ORIGIN } = process.env;
const app = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(`/api`, [admins, users, authentication, authorization]);
app.use(`/api/signIn`, cookieParser());
app.use(`/api-docs`, docs);

export default app;
