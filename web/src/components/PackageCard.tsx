import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageCard.css';

interface Servicio {
  nombre: string;
}

interface PackageCardProps {
  nombre: string;
  imagen?: string;
  servicios: Servicio[];
  descripcion: string;
  precio: string;
  onVerPaquete?: (servicios: Servicio[]) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  nombre,
  imagen,
  servicios,
  descripcion,
  precio,
  onVerPaquete
}) => {
  const navigate = useNavigate();

  const handleVerPaquete = () => {
    // First, if onVerPaquete exists, call it with the services
    if (onVerPaquete) {
      onVerPaquete(servicios);
    }
    
    // Then, navigate to the cotizacion page
    // We'll also store the selected package info in localStorage
    // so it can be retrieved after navigation
    localStorage.setItem('selectedPackage', JSON.stringify({
      nombre,
      servicios,
      precio
    }));
    
    navigate('/cotizacion');
  };

  return (
    <div className="package-card">
      <h2 className="package-title">{nombre}</h2>
      <div className="package-image">
        {imagen ? <img src={imagen} alt="Paquete" /> : 'Imagen'}
      </div>
      <div className="services-and-description">
        <div className="services-list">
          {servicios.map((servicio, index) => (
            <p key={index} className="service-item">- {servicio.nombre}</p>
          ))}
        </div>
        <p className="package-description">{descripcion}</p>
      </div>
      <div className="package-footer">
        <span className="package-price">Precio: {precio}</span>
        <button className="view-package-btn" onClick={handleVerPaquete}>Ver paquete</button>
      </div>
    </div>
  );
};

export default PackageCard;
