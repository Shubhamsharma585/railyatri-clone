var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const {newToken} = require('../controllers/auth.controller');
const {v4:UUID} = require('uuid');
import User from '../models/user.model'
require('dotenv').config();
// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
    callbackURL: "http://localhost:2244/auth/google/callback"
  },
  async function(accessToken:string, refreshToken:string, profile:any, done:any) {
    try{
        let user = await User.findOne({email:profile._json.email});
        if(!user){
            user = await User.create({email:profile._json.email,password:UUID()});
        }
        const token = newToken(user);
        //console.log(accessToken, refreshToken, profile)
        return done( null , { user, token});
    }
    catch(err){
        console.log(err)
    }
   
  }
));

module.exports = passport