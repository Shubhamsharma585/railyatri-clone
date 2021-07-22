import express, { Express } from 'express';

import { register, login } from './controllers/auth.controller';
import busController from './controllers/bus.controller';

const app: Express = express();

app.use(express.json());

<<<<<<< HEAD
export default app; 
=======
app.post('/register', register);
app.post('/login', login);
app.use('/bus', busController);

export default app;
>>>>>>> f7b077d2dcd77d7feb02d5ea86777453478c59a0
