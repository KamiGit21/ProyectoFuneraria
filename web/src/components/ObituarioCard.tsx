// ObituarioCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Button, Box } from '@mui/material';
import { CalendarToday, LocationOn, Favorite, Message } from '@mui/icons-material';

// Componente de párrafo personalizado (opcional, si no tienes uno, puedes usar Typography)
const Paragraph = ({ children }) => (
  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
    {children}
  </Typography>
);

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
        <CalendarToday fontSize="small" sx={{ mr: 1, color: '#6C4F4B' }} />
        <Typography variant="body2" color="text.secondary">
          {obituario.fechaNacimiento} - {obituario.fechaFallecimiento}
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationOn fontSize="small" sx={{ mr: 1, color: '#6C4F4B' }} />
        <Typography variant="body2" color="text.secondary">
          {obituario.lugar}
        </Typography>
      </Box>
      
      <Paragraph>{obituario.mensaje.substring(0, 120)}...</Paragraph>
      
      <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip 
            icon={<Favorite fontSize="small" />} 
            label={obituario.homenajes} 
            size="small" 
            sx={{ backgroundColor: '#f8e8e8', color: '#6C4F4B' }}
          />
          <Chip 
            icon={<Message fontSize="small" />} 
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

export default ObituarioCard;
