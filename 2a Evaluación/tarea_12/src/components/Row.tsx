import React from "react";

interface RowProps {
  fila: {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
  };
}

const Row: React.FC<RowProps> = ({ fila }) => (
  <tr>
    <td>{fila.producto}</td>
    <td>{fila.cantidad}</td>
    <td>{fila.precio}</td>
    <td>{fila.tienda}</td>
    <td>{fila.notas}</td>
    <td>{fila.comprado ? 'Sí' : 'No'}</td>
    <td><img src={fila.imagen} alt={fila.producto} style={{width: "100px", height: "100px"}} /></td>
  </tr>
);

export default Row;