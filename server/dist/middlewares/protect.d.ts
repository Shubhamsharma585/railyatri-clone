import { Request, Response, NextFunction } from 'express';
declare const protect: (req: Request | any, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default protect;
