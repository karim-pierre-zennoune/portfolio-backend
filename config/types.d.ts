import { Request } from 'express';
import type TokenPayload from '../src/types/interfaces/token-payload.interface.ts';

declare global {
  namespace Express {
    interface Request {
      user: TokenPayload;
      // user_id: number;
      // user_roles: string[];
      // uploadedFiles: Record<string, MulterS3File> = {};
    }
  }
}
