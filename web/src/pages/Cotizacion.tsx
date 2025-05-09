import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import {
  Section,
  Title,
  SubTitle,
  Paragraph,
} from '../styles/HomeStyles';
import '../styles/Cotizacion.css';

// Importa la imagen para el banner
import logo from '../assets/Logo_B.png';

export default function Cotizacion() {
    return (
        <>
            <div className="container">
                <div className="titulo">
                    <Title>COTIZACION</Title>
                </div>
                <div className="imagen">Imagen</div>
                <div className="subtitulo">
                    <SubTitle>Servicios disponibles</SubTitle>
                </div>
                <div className="seccion1">Sección 1</div>
                <div className="seccion2">Sección 2</div>
            </div>
        </>
    )
}