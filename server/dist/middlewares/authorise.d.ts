import { Request, Response, NextFunction } from 'express';
declare const authorize: (permittedRoles: any) => (req: Request | any, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default authorize;
