import React from 'react';
import Servicio from './Servicio';
import '../styles/Cotizacion.css';

export default function ScrollBoxServicios({ servicios, onCheck }) {
  return (
    <div className="scroll-box">
      {servicios.map((servicio) => (
        <Servicio
          key={servicio.id}
          servicio={servicio}
          onCheck={() => onCheck(servicio.id)}
        />
      ))}
    </div>
  );
}