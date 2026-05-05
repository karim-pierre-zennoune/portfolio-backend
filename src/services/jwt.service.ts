import type TokenPayload from '../types/interfaces/token-payload.interface.js';
import jwt from 'jsonwebtoken';

const signAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(
    { id: payload.id, email:payload.email, roles: payload.role },
    process.env.JWT_SECRET,
    {
      expiresIn: '24h',
    },
  );
};

const signRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(
    { id: payload.id, email:payload.email, roles: payload.role },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );
};

const verify = (token: string): TokenPayload => {
  return jwt.verify(token, process.env.JWT_SECRET) as TokenPayload;
};

const signPair = (
  payload: TokenPayload,
): { accessToken: string; refreshToken: string } => {
  return {
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
  };
};

const jwtService = {
  signAccessToken,
  signRefreshToken,
  verify,
  signPair
};

export default jwtService;
