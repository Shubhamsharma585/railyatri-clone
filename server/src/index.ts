import express, { Express } from 'express';

import { register, login } from './controllers/auth.controller';
import busController from './controllers/bus.controller';

const app: Express = express();

app.use(express.json());

app.post('/register', register);
app.post('/login', login);
app.use('/bus', busController);

export default app; 
