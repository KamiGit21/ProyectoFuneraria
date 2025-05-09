import React, { useState } from 'react';
import Servicio from './Servicio';
import '../styles/Cotizacion.css';

export default function ScrollBoxServicios() {
  const serviciosIniciales = Array.from({ length: 20 }, (_, i) => ({
    nombre: `Servicio ${i + 1}`,
    descripcion: `Descripción del servicio número ${i + 1}`,
    costo: `${(i + 1) * 100} Bs.`,
    checked: false,
  }));

  const [servicios, setServicios] = useState(serviciosIniciales);

  const handleCheck = (index: number) => {
    const nuevosServicios = [...servicios];
    nuevosServicios[index].checked = !nuevosServicios[index].checked;
    setServicios(nuevosServicios);
  };

  return (
    <div className="scroll-box">
      {servicios.map((servicio, index) => (
        <Servicio
          key={index}
          nombre={servicio.nombre}
          descripcion={servicio.descripcion}
          costo={servicio.costo}
          checked={servicio.checked}
          onCheck={() => handleCheck(index)}
        />
      ))}
    </div>
  );
}