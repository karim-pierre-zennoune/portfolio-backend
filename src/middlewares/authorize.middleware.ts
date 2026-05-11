import type { NextFunction, Request, RequestHandler, Response } from 'express';

const authorize = (allowedRole : string) => (req: Request, res: Response, next: NextFunction) => {
    if (!allowedRole.includes(req.user.role)) {
        return res.status(403).send("Accès interdit");
    }
next();
};

export default authorize;