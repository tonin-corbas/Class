import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import camp from "../img/camp.png";
import arboleda from "../img/arboleda.png";
import colonia from "../img/colonia.png";
import grymforge from "../img/grymforge.png";
import remanso from "../img/waukeen.png";
import creche from "../img/creche.png";
import alzaluna from "../img/alzaluna.png";
import taberna from "../img/taberna.png";
import campo from "../img/campo.png";

const Restaurantes = () => {
  const hotelData = [
    { titulo:'Arboleda esmeralda', imageUrl: arboleda, text: 'En este lugar podras hospedarte en el caso de que aceptes ayudar a los pobres Tieflings. Si los ayudas tetrataran como su héroe pero aún así estaras en un lugar humilde, ya que son unos simples refugiados, pero si aceptas las peticiones de los druidas lograrás un sitio un poco mejor.' },
    { titulo:'Campamento Goblin',imageUrl: camp, text: 'En este lugar podras hospedarte con unos increíbles lujos en el caso de que seas un fiel seguidor de la Absoluta. En caso de que seas un elegido de la misma serás considerado como un apóstol, en cambio si eres alguien que aborrezca a la Absoluta el precio de hospedarte será tu vida.' },
    { titulo:'Colonia Miconida',imageUrl: colonia, text: 'En seta zona, ups, digo esta zona estarás rodeado de setas que te proporcionaran un lugar como para hospedarte simpre y cuando te encargues de los Druegars y traigas la cabeza del elegido Nere, tambien podrias aniquilarlos pero perderias el lugar para descansar y poder oler sus esporas.' },
    { titulo:'GrymForge',imageUrl: grymforge, text: 'Para llegar aqui deberás pasar la prueba de un enano negro, osea un druegar. No se si te suena de algo esa raza, en caso de que la pases llegarás sin problemas. Pero si eres alguien agresivo o compasivo tendrás que usar tu labia para poder quedarte y poder descansar aqui. Cabe decir que no es recomendable ir a la forja, pero si estás loco puedes afrontar las consecuencias de tuu cuirosidad.' },
    { titulo:'Remanso de Waukeen',imageUrl: remanso, text: 'En este lugar no es que sea muy cómodo hospedarse, pero quien soy yo para decirte donde puedes dormir y comer. Este lugar fue devastado por un asaltode los goblins y elfos oscuros. No pueden ofrecerte mucha comodidad pero esta cerca del campamento goblin.' },
    { titulo:'Creche githyanki',imageUrl: creche, text: 'Ubicado en el paso de montaña y debajo del monasterio rosado. Es un lugar que no es muy apto para otras razas que no sean la githyanki ya que són muy racistas, en cambio si vas acompañado de un githyanki te permitirán quedarte. Te recomendamos no insultar a su reina (Es una mentirosa).' },
    { titulo:'Torre de Alzalunas',imageUrl: alzaluna, text: 'Ubicado en las tierras sombrías y cerca de la posada de la última luz. Es un lugar que no es muy apto para no seguidores de la Absoluta, ya que esta gobernada por uno de sus elegidos y no acepta a nadie que no sea seguidor de ella. Para poder quedarte en ella sin ser descubierto debes engañar a todas las personas de ahí.' },
    { titulo:'Taberna del elfo Cantante',imageUrl: taberna, text: 'El lugar más lujoso de todo Puerta de Baldur, en esta taberna te proporcionarán todo tipo de lujos como que te traigan la comida a la habitación sin que haga falta que la encuentres tu mismo, además podrás contratar los servicios de los hermans drow para pasar la noche (No nos importa su orientación sexual). Por esa misma razón este es el lugar predilecto para dormir antes de finalizar tu aventura.' },
    { titulo:'Campamento',imageUrl: campo, text: 'El lugar donde podrás pasar todas las noches mientras estés alejado de tu hospedaje, será el lugar perfecto para pasar la noche al interperie, además el campamento tiene una función de teletransporte ya que podrás ir a el desde cualquier lugar que estés mientras no sea un lugar prohibido.' },
  ];

  return (
    <Container className="my-4">
      <h1 className='text-light text-center'>Nuestros Hospedajes</h1>
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

export default Restaurantes;