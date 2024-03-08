import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import nautiloide from "../img/nautiloide.png";
import arboleda from "../img/arboleda.png";
import colonia from "../img/colonia.png";
import grymforge2 from "../img/grymforge2.png";
import ordalia from "../img/ordalia.png";
import alzaluna from "../img/alzaluna.png";

const Interes = () => {
  const hotelData = [
    { titulo:'Arboleda esmeralda', imageUrl: arboleda, text: 'Puede ser el mismo lugar que el hospedaje pero tambien es un lugar donde podrás encontrar y ver a druidas e incluso podras presenciar la estatua de su Dios Sylvannus. En este lugar estarás mas cerca que nunca de la naturaleza.' },
    { titulo:'Nautiloide estrellado',imageUrl: nautiloide, text: 'En este lugar podrás obsevar como es el interior de las naves de guerra de la raza de los Ilícidos raza que gobierna ' },
    { titulo:'Colonia Miconida',imageUrl: colonia, text: 'En este lugar podrás ver como viven los micónidos y como se reproducen, además podrás presenciar el intento de usurpación del liderazgo de la colónia por un extranjero.' },
    { titulo:'GrymForge',imageUrl: grymforge2, text: 'En caso de que hayas decidido ir mas allá de lo que ves en la grymforge, podrás usar la forja de adamantita pero con el peligro de enfrentarte al golem Grym, un golem gigante hecho de adamantita y resistente a todos los elementos.' },
    { titulo:'Ordalía de Shar',imageUrl: ordalia, text: 'La Ordalía de la Diosa Shar, considerada como la peor Diosa y hermana de Selûne la diosa principal. En la Ordalía se encontraban todos los guerreros de Shar llamados "Verdugos Oscuros" además es un lugar donde se encuentra la Santa de Selûne encerrada.' },
    { titulo:'Torre de Alzalunas',imageUrl: alzaluna, text: 'Ubicado en las tierras sombrías y cerca de la posada de la última luz. Es un lugar que no es muy apto para no seguidores de la Absoluta, ya que esta gobernada por uno de sus elegidos y no acepta a nadie que no sea seguidor de ella.' },
  ];

  return (
    <Container className="my-4">
      <h1 className='text-light text-center'>Lugares que te podrían interesar</h1>
      <Row className="mb-4">
        {hotelData.slice(0, 6).map((part, index) => (
          <Col key={index} xs={12} md={4}>
            <div className="bg-dark text-white p-4 rounded transition-scale my-2">
              <Image src={part.imageUrl} fluid />
              <h3 className='mt-3 text-center'>{part.titulo}</h3>
              <p className='mt-3'>{part.text}</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="mb-4">
        {hotelData.slice(6).map((part, index) => (
          <Col key={index} xs={12} md={4}>
            <div className="bg-dark text-white p-4 rounded transition-scale my-2">
              <Image src={part.imageUrl} fluid />
              <h3 className='mt-3 text-center'>{part.titulo}</h3>
              <p className='mt-3'>{part.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Interes;