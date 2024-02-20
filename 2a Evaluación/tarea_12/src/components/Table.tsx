import React from 'react';
import Row from './Row';
import { filas } from './lista';

const Table: React.FC = () => (
  <table className="table table-dark table-hover">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Tienda</th>
        <th>Notas</th>
        <th>Comprado</th>
        <th>Imagen</th>
      </tr>
    </thead>
    <tbody>
      {filas.map((fila, index) => <Row key={index} fila={fila} />)}
    </tbody>
  </table>
);

export default Table;