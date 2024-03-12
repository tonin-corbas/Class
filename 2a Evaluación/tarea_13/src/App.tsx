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
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navegador />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/puntos-de-interes" element={<Interes />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/hoteles" element={<Hotel />} />
        <Route path="/actividades-de-ocio" element={<Ocio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
