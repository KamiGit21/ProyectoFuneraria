import React from 'react';
import '../styles/Cotizacion.css';

type ServicioListProps = {
  nombre: string;
  onRemove: () => void;
};

const ServicioList: React.FC<ServicioListProps> = ({ nombre, onRemove }) => {
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
      <span style={{ fontSize: '16px' }}>{nombre}</span>
      <button
        onClick={onRemove}
        style={{
          backgroundColor: '#B59F6B',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
        }}
      >
        X
      </button>
    </div>
  );
};

export default ServicioList;
