import type { NextFunction, Request, RequestHandler, Response } from 'express';
import jwtService from '../services/jwt.service.js';
import AppError from '../errors/AppError.js';


export const authenticate: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError(401, "Token manquant"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwtService.verify(token as string);
    req.user = payload;
    next();
  } catch {
    next(new AppError(401, "Token invalide"));
  }
};