import React from 'react';
import logo from "../img/logo.png";

const MiFooter = () => {
    return (
        <footer className="bg-dark text-light">
            <img src={logo} width='70' alt='Logo'></img>
            <p className='text-center text-secondary '>© 2024 Todos los derechos reservados.</p>
        </footer>
    );
};

export default MiFooter;