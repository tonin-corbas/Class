import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navegador = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Navbar.Toggle aria-controls="offcanvasNavbar"/>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton className='bg-danger text-center'>
          <Offcanvas.Title id="offcanvasNavbarLabel" className='text-light'>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-danger flex-row'>
          <Nav>
            <Nav.Link className="px-3 text-light" href="/">Inicio</Nav.Link>
            <Nav.Link className="px-3 text-light" href="/points-of-interest">Puntos de Interés</Nav.Link>
            <Nav.Link className="px-3 text-light" href="/restaurants">Restaurantes</Nav.Link>
            <Nav.Link className="px-3 text-light" href="/hotels">Hoteles</Nav.Link>
            <Nav.Link className="px-3 text-light" href="/leisure-activities">Actividades de Ocio</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Navegador;
