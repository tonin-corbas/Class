import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navegador = () => {
    return (
        <Nav className="pe-3">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/points-of-interest">Puntos de Interés</Nav.Link>
            <Nav.Link href="/restaurants">Restaurantes</Nav.Link>
            <Nav.Link href="/hotels">Hoteles</Nav.Link>
            <Nav.Link href="/leisure-activities">Actividades de Ocio</Nav.Link>
        </Nav>
    );
};

export default Navegador;
