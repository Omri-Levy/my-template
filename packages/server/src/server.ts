import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv-safe';
import users from './routes/users';
import docs from './routes/docs';
import authentication from './routes/authentication';

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
app.use(`/api`, [users, authentication]);
app.use(`/api/signIn`, cookieParser());
app.use(`/api-docs`, docs);

export default app;
