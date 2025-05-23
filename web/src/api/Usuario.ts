import axios from './axiosInstance';

export interface Usuario {
  id: number;
  nombre_usuario: string;
  email: string;
  rol: 'CLIENTE' | 'OPERADOR' | 'ADMIN';
  estado: 'ACTIVO' | 'INACTIVO';
  creado_en: string;
  actualizado_en: string;
}


/** Obtiene todos los usuarios (GET /api/usuarios) */
export async function getUsuarios(): Promise<Usuario[]> {
  try {
    const response = await axios.get<Usuario[]>('/api/usuarios');
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
}

/** Obtiene un usuario por ID (GET /api/usuarios/:id) */
export async function getUsuarioById(id: number): Promise<Usuario> {
  try {
    const response = await axios.get<Usuario>(`/api/usuarios/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener usuario ${id}:`, error);
    throw error;
  }
}

/** Desactiva un usuario por ID (PUT /api/usuarios/:id/desactivar) */
export async function cambiarEstadoUsuario(id: number, estado: 'ACTIVO' | 'INACTIVO'): Promise<void> {
  try {
    await axios.put(`/api/usuarios/${id}/estado`, { estado });
  } catch (error) {
    console.error(`Error al cambiar estado del usuario ${id}:`, error);
    throw error;
  }
}
