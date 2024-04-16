import React from 'react';
import logo from './logo.svg';
import './App.css';
import Breeds from './Views/Breeds';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navegador from './Componentes/Navegador';
import Inicio from './Views/Inicio';


function App() {
  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="Selector-razas" element={<Breeds />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
