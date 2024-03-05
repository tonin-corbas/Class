import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../img/logo.png";
import fondo2 from "../img/fondo2.png";
const Navegador = () => {
  return (
    <Navbar expand="lg" className="bg-image text-dark"  bg="dark" data-bs-theme="dark" style={{ backgroundImage: `url(${fondo2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar.Brand as={Link} to='/'>
        <img src={logo} width='70' alt='Logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar"/>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton className='bg-danger text-center'>
          <Offcanvas.Title id="offcanvasNavbarLabel" className='text-light'>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=' bgd-flex justify-content-center' >
          <Nav>
            <Nav.Link className="px-3 text-dark fw-bold" href="/">Inicio</Nav.Link>
            <Nav.Link className="px-3 text-dark fw-bold" href="/points-of-interest">Puntos de Interés</Nav.Link>
            <Nav.Link className="px-3 text-dark fw-bold" href="/restaurants">Restaurantes</Nav.Link>
            <Nav.Link className="px-3 text-dark fw-bold" href="/hotels">Hoteles</Nav.Link>
            <Nav.Link className="px-3 text-dark fw-bold" href="/leisure-activities">Actividades de Ocio</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Navegador;
