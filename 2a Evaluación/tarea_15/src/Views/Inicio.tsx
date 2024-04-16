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
      <Col>
        <h1 className='text-light'>Explora el Mundo Felino: Tu Guía Completa de Razas de Gatos</h1>
        <small className='text-light'>
          <p>¿Eres un amante de los gatos buscando conocer más sobre tu compañero felino? ¡No busques más! Nuestra página web es el destino perfecto para explorar el vasto universo de las razas de gatos. Con una colección exhaustiva de fichas detalladas, te ofrecemos un recurso invaluable para descubrir y aprender sobre la diversidad y riqueza de las razas de gatos alrededor del mundo.</p>
          <p>Desde el majestuoso Maine Coon hasta el exótico Gato Bengalí, nuestra web cubre una amplia gama de razas, cada una con su propia galería de fotos, descripciones detalladas y consejos de cuidado. ¿Estás pensando en adoptar? Navega a través de nuestras categorías para encontrar el gato que mejor se adapte a tu estilo de vida y preferencias. Ya sea que prefieras gatos de pelo largo o corto, activos o tranquilos, nuestra web te guía en tu búsqueda del compañero ideal.</p>
          <p>Además, nuestra sección de cuidados te proporciona información vital sobre la salud y bienestar de tu gato. Aprende sobre nutrición, entrenamiento y cómo mantener a tu gato feliz y saludable durante toda su vida. Visita nuestra página hoy y sumérgete en el encantador mundo de los gatos. Con actualizaciones regulares y contenido interactivo, estamos seguros de que encontrarás todo lo que necesitas para vivir la mejor experiencia felina.</p>
        </small>
        <Carousel className='d-flex justify-content-center'>
          {images.map((url, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                src={url}
                alt={`Slide ${index}`}
                style={{ width: '50%', height: 'auto', margin: 'auto' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default Inicio;
