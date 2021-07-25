import { Request, Response } from 'express';
import IUser from '../types/user.types';
declare const newToken: (user: IUser) => string;
declare const register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { register, login, newToken };
