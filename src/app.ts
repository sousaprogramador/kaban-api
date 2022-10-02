import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { errorHandler } from './shared/infra/middlewares';
import { routersFactory } from './shared/infra/routes';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/tasks', routersFactory.createTasksRouter());
app.get('/healthcheck', (_req, res) => res.status(200).send('API HEALTHY')); // API Healthcheck endpoint

export { app }; // Export the app so it can be used in tests and the in the server.ts file
