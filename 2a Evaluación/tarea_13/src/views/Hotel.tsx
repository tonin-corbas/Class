import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import camp from "../img/camp.png";

const Hotel = () => {
  // Array de datos simulados (puedes reemplazarlo con tus propios datos)
  const hotelData = [
    { camp, text: 'En este lugar podras hospedarle con unos increíbles lujos en el caso de que seas un fiel seguidor de la Absoluta. En caso de que seas un elegidode la misma serás considerado como un apóstol, en cambio si eres alguien que aborrezca a la Absoluta el precio de hospedarte será tu vida. Buena suerte' },
    { imageUrl: 'ruta_de_la_imagen2.jpg', text: 'Texto para la parte 2' },
    { imageUrl: 'ruta_de_la_imagen3.jpg', text: 'Texto para la parte 3' },
    // ... Repite para las otras 9 partes ...
  ];

  return (
    <Container>
      <Row>
        {hotelData.slice(0, 6).map((part, index) => (
          <Col key={index} xs={12} md={4}>
            <Image src={part.camp} fluid />
            <p>{part.text}</p>
          </Col>
        ))}
      </Row>
      <Row>
        {hotelData.slice(6).map((part, index) => (
          <Col key={index} xs={12} md={4}>
            <Image src={part.imageUrl} fluid />
            <p>{part.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hotel;