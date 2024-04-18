import React from 'react';
import './App.css';
import Principal from './Views/Principal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navegador from './Componentes/Navegador';
import Inicio from './Views/Inicio';


function App() {
  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="Selector-razas" element={<Principal />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
