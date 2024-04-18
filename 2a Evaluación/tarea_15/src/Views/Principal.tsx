import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export type Juegos = Juego[]

export interface Juego {
  nombre: string;
  id: number;
  disponible: boolean;
  urlImagen: string;
  fecha?: string;
  precio: string;
}

const TarjetaJuego: React.FC<{ juego: Juego }> = ({ juego }) => (
    <Col md={4} className="bg-dark">
      <Card>
        <Card.Img variant="top" src={juego.urlImagen} />
        <Card.Body>
          <Card.Title>{juego.nombre}</Card.Title>
          <Card.Text>
            Fecha de lanzamiento: {juego.fecha}<br/>
            Precio: {juego.precio}€
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
  
  // Componente principal de la aplicación
  const Principal: React.FC = () => {
    const [juegos, setJuegos] = useState<Juego[]>([]);
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/tonin-corbas/Lenguaje-de-marcas/main/2a%20Evaluaci%C3%B3n/tarea_15/schema%20y%20json/juegos.json')
        .then(response => response.json())
        .then(data => setJuegos(data));
    }, []);
  
    return (
      <Row>
        {juegos.map((juego) => (
          <TarjetaJuego key={juego.id} juego={juego} />
        ))}
      </Row>
    );
  };
  
  export default Principal;