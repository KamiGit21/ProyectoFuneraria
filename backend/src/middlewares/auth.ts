import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export interface JwtPayload {
  id: string;          // id como string ⇒ sin problemas con BigInt
  rol: 'CLIENTE' | 'OPERADOR' | 'ADMIN';
}

/* ───────── Verifica token y adjunta req.user ───────── */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.header('Authorization');
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token requerido.' });
  }

  try {
    const token = header.replace('Bearer ', '');
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    (req as any).user = decoded;           // adjunta usuario
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido o expirado.' });
  }
};

/* ───────── Solo permite ciertos roles ───────── */
export const requireRol =
  (roles: JwtPayload['rol'][]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user as JwtPayload | undefined;
    if (!user || !roles.includes(user.rol))
      return res.status(403).json({ error: 'Sin permiso.' });
    next();
  };
