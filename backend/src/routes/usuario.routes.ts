import { Router } from 'express';
import { getAllUsuarios, getUsuarioById, desactivarUsuario } from '../controllers/usuario.controller';

const router = Router();

router.get('/', getAllUsuarios);
router.get('/:id', getUsuarioById);
router.put('/:id/desactivar', desactivarUsuario);

export default router;
