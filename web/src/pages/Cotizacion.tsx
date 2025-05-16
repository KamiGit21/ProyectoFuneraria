import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
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

// Importa la imagen para el banner
import logo from '../assets/Logo_B.png';

export default function Cotizacion() {
  // Crear la lista de servicios iniciales
  const serviciosIniciales = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    nombre: `Servicio ${i + 1}`,
    descripcion: `Descripción del servicio número ${i + 1}`,
    costo: `${(i + 1) * 100} Bs.`,
    checked: false,
  }));

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
    </>
  );
}