import React from 'react';

const PackageCard = ({ nombre, imagen, servicios, descripcion, precio }) => {
  return (
    <div className="max-w-md bg-[#f5f2ec] p-6 rounded-xl shadow-md text-[#443333] space-y-4">
      <h2 className="text-3xl font-light">{nombre}</h2>

      <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-white text-xl font-semibold">
        {imagen ? <img src={imagen} alt="Paquete" className="w-full h-full object-cover" /> : 'Imagen'}
      </div>

      <div className="grid grid-cols-2 gap-x-4 text-[#333e48]">
        {servicios.map((servicio, index) => (
          <React.Fragment key={index}>
            <p>- {servicio.nombre}</p>
            <p>{servicio.descripcion}</p>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between pt-4 text-xl">
        <span className="text-[#333e48]">Precio: {precio}</span>
        <button className="text-[#6e4b4b] hover:underline">Ver paquete</button>
      </div>
    </div>
  );
};

export default PackageCard;