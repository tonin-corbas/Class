import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegador from './components/Navegador';
import Hotel from './views/Hotel';
import Inicio from './views/Inicio';
import Interes from './views/Interes';
import Ocio from './views/Ocio';
import Restaurantes from './views/Restaurantes';
import fondo3 from './img/fondo3.png';

function App() { return (
  <div style={{
    backgroundImage: `url(${fondo3})`,
    height: '100%', // Esto hará que la imagen ocupe toda la altura de la ventana
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}>
    <Router>
      <Navegador />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/points-of-interest" element={<Interes />} />
        <Route path="/restaurants" element={<Restaurantes />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/leisure-activities" element={<Ocio />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;
