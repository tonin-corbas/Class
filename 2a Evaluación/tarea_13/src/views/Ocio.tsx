import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import luz from "../img/luz.png";
import colonia from "../img/colonia.png";
import remanso from "../img/waukeen.png";
import creche from "../img/creche.png";
import taberna from "../img/taberna.png";

const Ocio = () => {
  const hotelData = [
    { titulo:'Posada La Última Luz', imageUrl: luz, text: 'En la posada La Última Luz podrás pasar el rato bebiendo hidromiel, alcohol entre otras bebidas y comidas. También podrás jugar partidas de ajedrez junto al diablo, no verás eso en otro lado.' },
    { titulo:'Colonia Miconida',imageUrl: colonia, text: 'En seta zona, ups, digo esta zona estarás rodeado de setas que te proporcionaran un lugar como para hospedarte simpre y cuando te encargues de los Druegars y traigas la cabeza del elegido Nere, tambien podrias aniquilarlos pero perderias el lugar para descansar y poder oler sus esporas.' },
    { titulo:'Remanso de Waukeen',imageUrl: remanso, text: 'En este lugar no es que sea muy cómodo hospedarse, pero quien soy yo para decirte donde puedes dormir y comer. Este lugar fue devastado por un asaltode los goblins y elfos oscuros. No pueden ofrecerte mucha comodidad pero esta cerca del campamento goblin.' },
    { titulo:'Creche githyanki',imageUrl: creche, text: 'Ubicado en el paso de montaña y debajo del monasterio rosado. Es un lugar que no es muy apto para otras razas que no sean la githyanki ya que són muy racistas, en cambio si vas acompañado de un githyanki te permitirán quedarte. Te recomendamos no insultar a su reina (Es una mentirosa).' },
    { titulo:'Taberna del elfo Cantante',imageUrl: taberna, text: 'El lugar más lujoso de todo Puerta de Baldur, en esta taberna te proporcionarán todo tipo de lujos como que te traigan la comida a la habitación sin que haga falta que la encuentres tu mismo, además podrás contratar los servicios de los hermans drow para pasar la noche (No nos importa su orientación sexual). Por esa misma razón este es el lugar predilecto para dormir antes de finalizar tu aventura.' },
  ];

  return (
    <Container className="my-4">
      <h1 className='text-light text-center'>Lugares de Ocio</h1>
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

export default Ocio;