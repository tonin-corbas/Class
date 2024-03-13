import React from 'react';
import logo from './logo.svg';
import './App.css';
import Breeds from './Views/Breeds';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Breeds />
    </BrowserRouter>
  );
}

export default App;
