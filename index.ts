import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import 'reflect-metadata';
import { appRouter } from './src/AppRouter';
import './src/controllers/LoginController';
import './src/controllers/RootController';
import './src/controllers/ProtectedController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['sameh-othman'],
  }),
);
app.use(appRouter);

app.listen(3000, () => {
  console.log('appRouter working on port 3000');
});
