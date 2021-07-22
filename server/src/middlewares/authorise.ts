import { Request, Response, NextFunction } from 'express';

import User from '../models/user.model';
import IUser from '../types/user.types';

const authorize = (permittedRoles: any) => {
    return async (req: Request | any, res: Response, next: NextFunction) => {

        if (!permittedRoles) return next();

        const user: IUser = req.user;
        const isAllowed: IUser | null = await User.findOne({
            _id: user._id,
            role: {$in: permittedRoles}
        }).lean().exec();

        if(isAllowed) return next();

        return res.status(401).json({
            status: 'failed',
            message: "You are not authorized to access this page"
        });
    };
};

export default authorize;