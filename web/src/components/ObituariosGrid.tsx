import { useEffect, useState } from 'react';
import ObituarioCard from './ObituarioCard';
// Usando fetch directamente ya que tenemos problemas con la importación de api
// import api from './axiosInstance';

import { 
  Box, 
  Typography, 
  Grid, 
  Divider,
  Alert
} from '@mui/material';

const SubTitle = ({ children }) => (
  <Typography 
    variant="h5" 
    sx={{ 
      fontFamily: `'Playfair Display', serif`,
      fontWeight: 600,
      color: '#6C4F4B',
      mb: 1
    }}
  >
    {children}
  </Typography>
);

type Obituario = {
  id: number;
  orden_id: number;
  titulo: string;
  mensaje: string;
  url_slug: string;
  imagen_url: string;
  publicado: boolean;
  creado_en: string;
  actualizado_en: string;
};

export default function ObituariosGrid() {
  const [obituarios, setObituarios] = useState<Obituario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarObituarios = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Usar fetch con manejo explícito de la respuesta
        const response = await fetch('http://localhost:3001/api/obituarios');
        
        // Verificar si la respuesta es correcta
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Respuesta del servidor:', errorText);
          throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
        }
        
        // Verificar explícitamente el tipo de contenido
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Contenido no JSON recibido:', text.substring(0, 500) + '...');
          throw new Error(`Respuesta inesperada del servidor: ${contentType}`);
        }
        
        const data = await response.json();
        setObituarios(data);
      } catch (err) {
        console.error('Error al cargar obituarios:', err);
        
        // Mostrar mensaje de error más detallado
        if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
          setError('No se pudo conectar al servidor. Verifique que el servidor esté ejecutándose.');
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    cargarObituarios();
  }, []);

  const handleViewObituario = (obituario: Obituario) => {
    // Define aquí la lógica para ver el obituario
    console.log('Ver obituario', obituario);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <SubTitle>Homenajes Recientes</SubTitle>
      <Divider sx={{ mb: 3 }} />
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      {loading ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography>Cargando homenajes...</Typography>
        </Box>
      ) : obituarios.length > 0 ? (
        <Grid container spacing={3}>
          {obituarios.map((obituario) => (
            <Grid item xs={12} sm={6} md={4} key={obituario.id}>
              <ObituarioCard 
                obituario={obituario} 
                onView={handleViewObituario}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 8, 
            backgroundColor: '#f9f9f9',
            borderRadius: 2
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No se encontraron obituarios que coincidan con tu búsqueda.
          </Typography>
        </Box>
      )}
    </Box>
  );
}