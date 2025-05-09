import React from 'react';
import '../styles/Cotizacion.css';

interface ServicioProps {
  nombre: string;
  descripcion: string;
  costo: string;
  checked: boolean;
  onCheck: () => void;
}

const Servicio: React.FC<ServicioProps> = ({ nombre, descripcion, costo, checked, onCheck }) => {
  return (
    <div className="servicio-container">
      <div className="servicio-info">
        <h3 className="servicio-nombre">{nombre}</h3>
        <p className="servicio-descripcion">{descripcion}</p>
      </div>
      <div className="servicio-costo">costo: {costo}</div>
      <div className="servicio-checkbox">
        <input type="checkbox" checked={checked} onChange={onCheck} />
      </div>
    </div>
  );
};

export default Servicio;