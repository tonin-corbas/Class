import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navegador from './components/Navegador';
import Hotel from './views/Hotel';
import Inicio from './views/Inicio';
import Interes from './views/Interes';
import Ocio from './views/Ocio';
import Restaurantes from './views/Restaurantes';

function App() {
  return (
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
  );
}

export default App;
