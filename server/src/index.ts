import express, { Express } from 'express';

import { register, login } from './controllers/auth.controller';
import busController from './controllers/bus.controller';
const passport= require('./config/passport')
const app: Express = express();



app.use(express.json());
app.use(passport.initialize())
passport.serializeUser(function(user:any, done:any) {
    done(null,'user');
  });
  
  passport.deserializeUser(function(id:any, done:any) {
    done(null,'user')
  });

app.post('/register', register);
app.post('/login', login);
app.use('/bus', busController);
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/userinfo.email'] }));


app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req:any, res) {
    res.status(201).json({status: 'success', token:req.user.token});
  });

export default app;
