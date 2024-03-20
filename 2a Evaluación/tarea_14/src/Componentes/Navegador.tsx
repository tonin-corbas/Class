import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo2 from "../img/logo2.png";
const Navegador = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-light"  bg="dark" data-bs-theme="dark">
      <Navbar.Brand as={Link} to='/'>
        <img src={logo2} width='70' alt='Logo'></img>
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
            <Nav.Link className="px-3 text-light fw-bold" as={NavLink} to="">Inicio</Nav.Link>
            <Nav.Link className="px-3 text-light fw-bold" as={NavLink} to="Selector-razas">Selector de Razas</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Navegador;
