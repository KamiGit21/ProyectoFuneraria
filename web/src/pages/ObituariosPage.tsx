import React, { useState } from 'react';

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid, 
  Button, 
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Chip
} from '@mui/material';
import { Search, Heart as Favorite, MessageCircle as Message, Calendar as CalendarToday, MapPin as LocationOn } from 'lucide-react';
import { useEffect } from 'react';

// Componentes estilizados
const PageTitle = ({ children }) => (
  <Typography 
    variant="h2" 
    sx={{ 
      fontFamily: `'Playfair Display', serif`,
      fontWeight: 700,
      color: '#6C4F4B',
      mb: 2,
      textAlign: 'center'
    }}
  >
    {children}
  </Typography>
);

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

const Paragraph = ({ children }) => (
  <Typography 
    variant="body1" 
    sx={{ 
      color: '#333',
      mb: 2
    }}
  >
    {children}
  </Typography>
);

// Tarjeta de Obituario
const ObituarioCard = ({ obituario, onView }) => (
  <Card 
    sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: 2,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      }
    }}
  >
    <CardMedia
      component="img"
      height="240"
      image={obituario.imagen}
      alt={obituario.nombre}
      sx={{ objectFit: 'cover' }}
    />
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography 
        variant="h5" 
        component="div" 
        sx={{ 
          fontFamily: `'Playfair Display', serif`,
          fontWeight: 600,
          mb: 1
        }}
      >
        {obituario.nombre}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <CalendarToday size={16} style={{ marginRight: '8px', color: '#6C4F4B' }} />
        <Typography variant="body2" color="text.secondary">
          {obituario.fechaNacimiento} - {obituario.fechaFallecimiento}
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationOn size={16} style={{ marginRight: '8px', color: '#6C4F4B' }} />
        <Typography variant="body2" color="text.secondary">
          {obituario.lugar}
        </Typography>
      </Box>
      
      <Paragraph>{obituario.mensaje.substring(0, 120)}...</Paragraph>
      
      <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip 
            icon={<Favorite size={14} />} 
            label={obituario.homenajes} 
            size="small" 
            sx={{ backgroundColor: '#f8e8e8', color: '#6C4F4B' }}
          />
          <Chip 
            icon={<Message size={14} />} 
            label={obituario.mensajes} 
            size="small"
            sx={{ backgroundColor: '#e8f4f8', color: '#4B6C6C' }}
          />
        </Box>
        
        <Button
          variant="contained"
          size="small"
          onClick={() => onView(obituario.id)}
          sx={{
            backgroundColor: '#6C4F4B',
            color: '#F2EFEA',
            borderRadius: 50,
            px: 2,
            '&:hover': { backgroundColor: '#A48E5F' },
          }}
        >
          Ver Homenaje
        </Button>
      </Box>
    </CardContent>
  </Card>
);

// Datos de muestra
// Tipado para obituario
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
  // Puedes agregar campos calculados si lo necesitas, como homenajes/mensajes
}

const fetchObituarios = async (): Promise<Obituario[]> => {
  // Cambia la URL por la de tu backend real
  const res = await fetch('/api/obituarios?limit=5');
  if (!res.ok) throw new Error('Error al cargar obituarios');
  return res.json();
};

const obituariosMuestra: Obituario[] = []; // Inicialmente vacío

// En el componente principal, reemplaza el useState inicial y agrega useEffect para cargar los datos

// Página principal
const ObituariosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [obituarios, setObituarios] = useState(obituariosMuestra);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    
    if (event.target.value === '') {
      setObituarios(obituariosMuestra);
    } else {
      const filtrados = obituariosMuestra.filter(
        obituario => 
          obituario.nombre.toLowerCase().includes(event.target.value.toLowerCase()) ||
          obituario.lugar.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setObituarios(filtrados);
    }
  };
  
  const handleViewObituario = (id) => {
    console.log(`Ver obituario ${id}`);
    // Aquí implementarías la navegación al detalle del obituario
    // Por ejemplo: navigate(`/obituarios/${id}`)
  };

  return (
    <Box sx={{ py: 5 }}>
      <Container>
        {/* Encabezado */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: 5,
            backgroundColor: '#F2EFEA',
            borderRadius: 2,
            p: 3,
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}
        >
          <PageTitle>Obituarios y Homenajes</PageTitle>
          <Paragraph>
            Honramos la memoria de quienes han partido, celebrando sus vidas y legados. 
            Estos espacios digitales permiten a familiares y amigos compartir recuerdos, 
            condolencias y mensajes de apoyo.
          </Paragraph>
          
          {/* Buscador */}
          <Box 
            component="form" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              maxWidth: 500,
              mx: 'auto',
              mt: 3
            }}
          >
            <TextField
              fullWidth
              placeholder="Buscar por nombre o lugar..."
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="#6C4F4B" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 50 }
              }}
            />
          </Box>
        </Box>
        
        {/* Resultados */}
        <Box sx={{ mb: 4 }}>
          <SubTitle>Homenajes Recientes</SubTitle>
          <Divider sx={{ mb: 3 }} />
          
          {obituarios.length > 0 ? (
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
              <Button 
                variant="text" 
                sx={{ mt: 2, color: '#6C4F4B' }}
                onClick={() => setObituarios(obituariosMuestra)}
              >
                Ver todos los homenajes
              </Button>
            </Box>
          )}
        </Box>
        
        {/* Sección informativa */}
        <Box 
          sx={{ 
            backgroundColor: '#6C4F4B', 
            color: '#F2EFEA',
            borderRadius: 2,
            p: 4,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontFamily: `'Playfair Display', serif`,
              fontWeight: 600,
              mb: 2
            }}
          >
            Crear un Homenaje
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Honra la memoria de tu ser querido creando un espacio digital permanente 
            donde familiares y amigos puedan compartir recuerdos, fotos y mensajes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#F2EFEA',
              color: '#6C4F4B',
              borderRadius: 50,
              px: 4,
              '&:hover': { backgroundColor: '#e5e2d9' },
            }}
          >
            Iniciar Sesión para Crear
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ObituariosPage;