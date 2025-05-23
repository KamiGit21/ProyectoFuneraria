import { z } from 'zod';

export const UsuarioSchema = z.object({
  id: z.number(),
  nombre_usuario: z.string().max(32),
  email: z.string().email(),
  password_hash: z.string(),
  rol: z.enum(['CLIENTE', 'OPERADOR', 'ADMIN']),
  estado: z.enum(['ACTIVO', 'INACTIVO']),
  creado_en: z.date(),
  actualizado_en: z.date(),
});

export type UsuarioDto = z.infer<typeof UsuarioSchema>;
