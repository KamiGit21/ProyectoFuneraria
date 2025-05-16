import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import {
  Section,
  Title,
  SubTitle,
  Paragraph,
  PageTitle,
} from '../styles/HomeStyles';
import '../styles/Cotizacion.css';
import ScrollBoxServicios from '../components/ScrollBoxServicios';
import ServicioList from '../components/ServicioList';
import PackageCard from '../components/PackageCard';
import Carrusel from '../components/carrusel';

// Importa la imagen para el banner
import logo from '../assets/Logo_B.png';

export default function Cotizacion() {
  // Note: serviciosIniciales needs to be defined with the structure below 
  // This is a placeholder to avoid errors - you should replace this with your actual services
  const serviciosIniciales = [
    { id: '1', nombre: 'Ataúd estándar', descripcion: 'Ataúd de calidad estándar', costo: '800 Bs.', checked: false },
    { id: '2', nombre: 'Ataúd de lujo', descripcion: 'Ataúd de mejor calidad y diseño', costo: '1500 Bs.', checked: false },
    { id: '3', nombre: 'Ataúd premium', descripcion: 'Ataúd de calidad premium', costo: '1200 Bs.', checked: false },
    { id: '4', nombre: 'Ataúd ejecutivo', descripcion: 'Ataúd ejecutivo de alta calidad', costo: '2000 Bs.', checked: false },
    { id: '5', nombre: 'Ataúd básico', descripcion: 'Ataúd económico y sencillo', costo: '500 Bs.', checked: false },
    { id: '6', nombre: 'Ataúd personalizado', descripcion: 'Ataúd con personalización especial', costo: '1800 Bs.', checked: false },
    { id: '7', nombre: 'Traslado local', descripcion: 'Traslado dentro de la ciudad', costo: '200 Bs.', checked: false },
    { id: '8', nombre: 'Traslado regional', descripcion: 'Traslado en la región', costo: '600 Bs.', checked: false },
    { id: '9', nombre: 'Traslado internacional', descripcion: 'Traslado a otro país', costo: '2500 Bs.', checked: false },
    { id: '10', nombre: 'Asesoría básica', descripcion: 'Asesoría en trámites básicos', costo: '200 Bs.', checked: false },
    { id: '11', nombre: 'Asesoría completa', descripcion: 'Asesoría en todos los trámites', costo: '500 Bs.', checked: false },
    { id: '12', nombre: 'Apoyo psicológico', descripcion: 'Apoyo para la familia', costo: '600 Bs.', checked: false },
    { id: '13', nombre: 'Ceremonia personalizada', descripcion: 'Ceremonia según preferencias', costo: '1000 Bs.', checked: false },
    { id: '14', nombre: 'Ceremonia VIP', descripcion: 'Ceremonia exclusiva', costo: '1500 Bs.', checked: false },
    { id: '15', nombre: 'Asesoría económica', descripcion: 'Opciones económicas', costo: '150 Bs.', checked: false },
    { id: '16', nombre: 'Ceremonia conmemorativa', descripcion: 'Ceremonia especial', costo: '1200 Bs.', checked: false },
    { id: '17', nombre: 'Libro de recuerdos', descripcion: 'Libro para firmas y mensajes', costo: '300 Bs.', checked: false },
  ];

  
  
  const paquetes = [
    {
      title: 'Paquete Básico',
      description: 'Incluye servicios esenciales.',
      price: '$1,200',
      features: ['Ataúd estándar', 'Traslado local', 'Asesoría básica'],
      imagen: 'https://efuneraria.com/wp-content/uploads/2022/02/que-es-una-funeraria.jpg'
    },
    {
      title: 'Paquete Premium',
      description: 'Un servicio completo con detalles personalizados.',
      price: '$3,500',
      features: ['Ataúd de lujo', 'Ceremonia personalizada', 'Asesoría completa'],
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/JapaneseFuneralArrangementTokyo.jpg'
    },
    {
      title: 'Paquete Familiar',
      description: 'Pensado para brindar apoyo integral a toda la familia.',
      price: '$2,800',
      features: ['Ataúd premium', 'Traslado regional', 'Apoyo psicológico'],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloFGP-lru6HENP-FFVZnoPYvE10QmsVTX3g&s'
    },
    {
      title: 'Paquete Ejecutivo',
      description: 'Servicios exclusivos para clientes exigentes.',
      price: '$5,000',
      features: ['Ataúd ejecutivo', 'Traslado internacional', 'Ceremonia VIP'],
      imagen: 'https://funeza.com/wp-content/uploads/2024/04/thumbnail-3.jpg'
    },
    {
      title: 'Paquete Económico',
      description: 'Una opción accesible sin comprometer la calidad.',
      price: '$900',
      features: ['Ataúd básico', 'Traslado local', 'Asesoría económica'],
      imagen: 'https://static.abc.es/media/sociedad/2018/04/06/ataudes-kqFH--1240x698@abc.jpg'
    },
    {
      title: 'Paquete Memorial',
      description: 'Incluye servicios para honrar la memoria de manera especial.',
      price: '$4,200',
      features: ['Ataúd personalizado', 'Ceremonia conmemorativa', 'Libro de recuerdos'],
      imagen: 'https://efuneraria.com/wp-content/uploads/2022/02/que-es-una-funeraria.jpg'
    },
  ];

  const [servicios, setServicios] = useState(serviciosIniciales);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);
  
  // Calcular el costo total
  const total = serviciosSeleccionados.reduce((sum, servicio) => {
    const costoNumerico = parseInt(servicio.costo.split(' ')[0]);
    return sum + costoNumerico;
  }, 0);

  // Manejar el check/uncheck de un servicio
  const handleCheck = (id) => {
    // Actualizar el estado del servicio
    const nuevosServicios = servicios.map(servicio => {
      if (servicio.id === id) {
        const nuevoEstado = !servicio.checked;
        
        // Si se está marcando, añadir a servicios seleccionados
        if (nuevoEstado && !serviciosSeleccionados.some(s => s.id === id)) {
          setServiciosSeleccionados([...serviciosSeleccionados, servicio]);
        } 
        // Si se está desmarcando, quitar de servicios seleccionados
        else if (!nuevoEstado) {
          setServiciosSeleccionados(serviciosSeleccionados.filter(s => s.id !== id));
        }
        
        return { ...servicio, checked: nuevoEstado };
      }
      return servicio;
    });
    
    setServicios(nuevosServicios);
  };

  // Manejar la eliminación de un servicio seleccionado
  const handleRemove = (id) => {
    // Quitar de la lista de seleccionados
    setServiciosSeleccionados(serviciosSeleccionados.filter(s => s.id !== id));
    
    // Desmarcar el checkbox
    setServicios(servicios.map(servicio => {
      if (servicio.id === id) {
        return { ...servicio, checked: false };
      }
      return servicio;
    }));
  };

  // Nueva función para manejar la selección de paquete
  const handleSelectPackage = (serviciosPaquete) => {
    // Crear un array con los nombres de los servicios del paquete
    const nombreServiciosPaquete = serviciosPaquete.map(s => s.nombre);
    
    // Actualizar todos los servicios
    const nuevosServicios = servicios.map(servicio => {
      // Verificar si el servicio está en el paquete
      const estaEnPaquete = nombreServiciosPaquete.includes(servicio.nombre);
      
      // Si está en el paquete pero no estaba seleccionado, o si no está en el paquete pero estaba seleccionado
      if ((estaEnPaquete && !servicio.checked) || (!estaEnPaquete && servicio.checked)) {
        return { ...servicio, checked: estaEnPaquete };
      }
      
      return servicio;
    });
    
    setServicios(nuevosServicios);
    
    // Actualizar servicios seleccionados
    const nuevosServiciosSeleccionados = nuevosServicios.filter(servicio => servicio.checked);
    setServiciosSeleccionados(nuevosServiciosSeleccionados);
  };

  return (
    <>
      <div className="container">
        <div className="titulo"><PageTitle>COTIZACION</PageTitle></div>
        <div className="imagen">
          <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="subtitulo"><Title>Servicios disponibles</Title></div>
        <div className="seccion1">
          <ScrollBoxServicios 
            servicios={servicios}
            onCheck={handleCheck}
          />
        </div>
        <div className="seccion2">
          <div className="servicios-seleccionados scroll-box">
            <SubTitle>Resumen</SubTitle>
            {serviciosSeleccionados.length > 0 ? (
              serviciosSeleccionados.map((servicio) => (
                <ServicioList 
                  key={servicio.id} 
                  servicio={servicio} 
                  onRemove={() => handleRemove(servicio.id)} 
                />
              ))
            ) : (
              <p style={{ color: '#666', fontStyle: 'italic' }}>No hay servicios seleccionados</p>
            )}
            <Paragraph>Total: {total} Bs.</Paragraph>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#6C4F4B',
                color: '#F2EFEA',
                borderRadius: 50,
                px: 8,
                py: 3, 
                fontSize: '1rem', 
                whiteSpace: 'nowrap',
                '&:hover': { backgroundColor: '#A48E5F' },
              }}
            >
              Contratar
            </Button>
          </div>
        </div>
      </div>
      {/* Sección de Paquetes */}
      <Box
          sx={{
          width: '100%',
          backgroundColor: '#6C4F4B',
          color: '#F2EFEA',
          py: 5,
          textAlign: 'center',
          borderRadius: 2, // Redondea las esquinas del contenedor principal
          }}
      >
      <Container sx={{ width: '100%' }}>
          <Typography
              variant="h2"
              sx={{
              fontFamily: `'Playfair Display', serif`,
              fontWeight: 700,
              mb: 3,
              }}
          >
          Paquetes
          </Typography>
          <Carrusel>
              {paquetes.map((paquete, index) => (
                  <Box
                      key={index}
                      sx={{
                      flex: '0 0 auto',
                      minWidth: '300px',
                      borderRadius: 2, // Redondea las esquinas de cada tarjeta
                      overflow: 'hidden', // Asegura que el contenido no se desborde
                      }}
                  >
                      <PackageCard
                          nombre={paquete.title}
                          descripcion={paquete.description}
                          precio={paquete.price}
                          imagen={paquete.imagen}
                          servicios={paquete.features.map((feature) => ({
                            nombre: feature,
                          }))}
                          onVerPaquete={(servicios) => handleSelectPackage(servicios)}
                      />
                  </Box>
              ))}
          </Carrusel>
      </Container>
      </Box>
    </>
  );
}