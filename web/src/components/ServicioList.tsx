import React from 'react';
import '../styles/Cotizacion.css';

type ServicioListProps = {
  servicio: {
    id: number;
    nombre: string;
    costo: string;
  };
  onRemove: () => void;
};

const ServicioList: React.FC<ServicioListProps> = ({ servicio, onRemove }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      padding: '8px 12px',
      marginBottom: '8px',
      backgroundColor: '#F2EFEA',
    }}>
      <span style={{ fontSize: '16px' }}>{servicio.nombre} - {servicio.costo}</span>
      <button
        onClick={onRemove}
        style={{
          backgroundColor: '#B59F6B',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
          borderRadius: '4px'
        }}
      >
        X
      </button>
    </div>
  );
};

export default ServicioList;