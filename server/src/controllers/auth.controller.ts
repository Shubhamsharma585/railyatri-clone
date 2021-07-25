require('dotenv').config();
import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';

import User from '../models/user.model';
import IUser from '../types/user.types';

const secretKey: string = process.env.JWT_SECRET_KEY || '';

const newToken = (user: IUser): string=>{
    return jwt.sign({id: user._id}, secretKey)
};

const register = async(req: Request, res: Response)=>{
    let email = req.body.email;
    try {

        let user: IUser | null = await User.findOne({email}).lean().exec();

        if(user){
            return res.status(400).json({
                status: 'failed',
                message: 'User with same email id already exists'
            });
        };

        user = await User.create(req.body);
        const token: string = newToken(user);

        res.status(201).json({
            token,
            user
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

const login = async (req: Request, res: Response)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {

        let user: IUser | null = await User.findOne({email}).exec();

        if(!user) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incorrect email or password'
            });
        };

        const match = await user.checkPassword(password);

        if(!match) {
            return res.status(400).json({
                status: 'failed',
                message: "Incorrect email or password"
            })
        }

        const token: string = newToken(user);
        return res.status(200).json({token});
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

export {
    register,
    login,
    newToken
}