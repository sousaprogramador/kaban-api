import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import { tasksRoutes } from './routes/task.routes';
import { errorHandler } from './middlewares';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(tasksRoutes);
app.get('/healthcheck', (_req, res) => res.status(200).send('API HEALTHY')); // API Healthcheck endpoint

export { app }; // Export the app so it can be used in tests and the in the server.ts file
