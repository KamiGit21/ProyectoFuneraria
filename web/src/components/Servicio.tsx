import React from 'react';
import '../styles/Cotizacion.css';

interface ServicioProps {
  servicio: {
    id: number;
    nombre: string;
    descripcion: string;
    costo: string;
    checked: boolean;
  };
  onCheck: () => void;
}

const Servicio: React.FC<ServicioProps> = ({ servicio, onCheck }) => {
  return (
    <div className="servicio-container">
      <div className="servicio-info">
        <h3 className="servicio-nombre">{servicio.nombre}</h3>
        <p className="servicio-descripcion">{servicio.descripcion}</p>
      </div>
      <div className="servicio-costo">costo: {servicio.costo}</div>
      <div className="servicio-checkbox">
        <input 
          type="checkbox" 
          checked={servicio.checked} 
          onChange={onCheck} 
        />
      </div>
    </div>
  );
};

export default Servicio;