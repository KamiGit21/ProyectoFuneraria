import { Request, Response } from 'express';
import prisma from '../config/prismaClient';


export const getAllUsuarios = async (_req: Request, res: Response) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

export const getUsuarioById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const usuario = await prisma.usuario.findUnique({ where: { id } });

  if (!usuario) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(usuario);
};

export const desactivarUsuario = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const usuario = await prisma.usuario.findUnique({ where: { id } });
  if (!usuario) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const actualizado = await prisma.usuario.update({
    where: { id },
    data: { estado: 'INACTIVO', actualizado_en: new Date() },
  });

  res.json(actualizado);
};

