import jwt from "jsonwebtoken";
require('dotenv').config();
import { Request, Response, NextFunction} from 'express';
import IUser from "../types/user.types";

import User from '../models/user.model';

const secretKey = process.env.JWT_SECRET_KEY || "";

const verifyToken = (token: string)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, secretKey, (err, paylaod)=>{
            if(err) return reject(err);

            resolve(paylaod);
        });
    });
};

const protect = async (req: Request | any, res: Response, next: NextFunction)=>{ 

    const bearerToken: string | undefined = req.headers.authorization;

    if(!bearerToken || !bearerToken.startsWith('Bearer ')){
        return res.status(400).json({
            status: 'failed',
            message: 'Please provide bearer token'
        });
    };

    const token: string = bearerToken.split(' ')[1].trim();

    let payload: IUser | any;
    try {
        payload = await verifyToken(token);
    }
    catch (err) {
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this page'
        });
    };

    let user;
    try {
        user = await User.findById(payload.id).lean().exec();
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: 'Something went wrong, please try again later'
        });
    };

    if(!user) {
        return res.status(400).json({
            status: 'failed',
            message: 'You are not authorized to access this page'
        });
    };

    req.user = user;

    next();
};

export default protect;