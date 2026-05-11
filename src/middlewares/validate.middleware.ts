import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { ZodError, ZodType } from 'zod';
import type { AnyZodObject } from 'zod/v3';

// AnyZodObject instead of ZodType ?
  export const validate = (validator: ZodType) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await validator.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error) {
        if (error instanceof ZodError) {
              return res.status(400).send({ msg: error.issues[0]?.message ?? "Error message missing" } );
        }
        return res.status(500).send("Error making request, contact support" );
    }
};
