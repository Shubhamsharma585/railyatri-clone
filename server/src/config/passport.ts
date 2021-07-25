import passport from 'passport';
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
import {newToken} from '../controllers/auth.controller';
import {v4 as UUID} from 'uuid';
import User from '../models/user.model'
require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
    callbackURL: "http://localhost:5000/auth/google/callback"
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

export default passport;