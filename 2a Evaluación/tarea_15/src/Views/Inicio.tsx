import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const Inicio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => setImages(data.map((item: { url: any; }) => item.url)));
  }, []);

  return (
    <Row className='text-center bg-dark'>
      <Col className='text-light'>
      <div>
      <h1>¡Bienvenidos a PixelQuest, tu destino definitivo para aventuras digitales!</h1>
      <p>En <strong>PixelQuest</strong>, creemos que cada píxel cuenta una historia y cada juego es una puerta a mundos inimaginables. Nuestra misión es llevarte a través de un viaje épico desde la comodidad de tu hogar. Con una colección que abarca desde los clásicos atemporales hasta los lanzamientos más explosivos, estamos aquí para asegurarnos de que tu próxima gran aventura esté a solo un clic de distancia.</p>
      <h2>¿Por qué elegir PixelQuest?</h2>
      <ul>
        <li><strong>Selección Estelar</strong>: Explora un universo de juegos que se expande constantemente, con títulos para todos los gustos y edades.</li>
        <li><strong>Ofertas Galácticas</strong>: Descubre descuentos que te harán saltar a la estratosfera. ¡Grandes juegos a precios pequeños!</li>
        <li><strong>Soporte de Campeones</strong>: Nuestro equipo de expertos está listo para ayudarte en cada paso de tu viaje, garantizando que tu experiencia sea tan fluida como el gameplay de tus títulos favoritos.</li>
      </ul>
      <h3>Comunidad PixelQuest</h3>
      <p>Únete a nuestra comunidad en línea y comparte tus logros, guías y reseñas. ¡Conviértete en un líder en los marcadores de PixelQuest y gana premios exclusivos!</p>
      <h3>¡La aventura te espera!</h3>
      <p>No dejes que la realidad limite tu imaginación. En PixelQuest, cada juego es una puerta abierta a lo extraordinario. <strong>¡Explora, juega y conquista!</strong></p>
    </div>
      </Col>
    </Row>
  );
};

export default Inicio;
