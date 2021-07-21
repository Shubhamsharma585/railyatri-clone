import express, { Express } from 'express';

import busController from './controllers/bus.controller';

const app: Express = express();

app.use(express.json());

app.use('/bus', busController);

export default app;