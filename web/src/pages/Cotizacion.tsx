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

// Importa la imagen para el banner
import logo from '../assets/Logo_B.png';

export default function Cotizacion() {
  const [checked, setChecked] = useState(false);
    return (
        <>
            <div className="container">
                <div className="titulo"><PageTitle>COTIZACION</PageTitle></div>
                <div className="imagen">
                    <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="subtitulo"><Title>Servicios disponibles</Title></div>
                <div className="seccion1">
                    <ScrollBoxServicios />
                </div>
                <div className="seccion2">
                    <div className="servicios-seleccionados">
                        <SubTitle>Resumen</SubTitle>
                        <ServicioList nombre="Servicio 1" onRemove={() => {}} />
                        <ServicioList nombre="Servicio 2" onRemove={() => {}} />
                        <ServicioList nombre="Servicio 3" onRemove={() => {}} />
                        <ServicioList nombre="Servicio 4" onRemove={() => {}} />
                        <ServicioList nombre="Servicio 5" onRemove={() => {}} />
                        <ServicioList nombre="Servicio 6" onRemove={() => {}} />
                        <Paragraph>Total: 1000 bs.</Paragraph>
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
    )
}