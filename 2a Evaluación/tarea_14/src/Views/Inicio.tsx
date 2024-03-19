import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Inicio = () => {
  return (
    <Container>
      <Row className='text-center'>
        <Col>
          <h1 className='text-dark'>Bienvenido a nuestra guía turística de Los Reinos Olvidados</h1>
          <small className='text-dark'>
            <p>En las sombras de un mundo antiguo y olvidado, se alza la majestuosa ciudad de Baldur’s Gate, un faro de civilización en la vasta y peligrosa Costa de la Espada. Aquí, las piedras milenarias de sus murallas susurran historias de heroísmo y traición, mientras que sus calles bulliciosas son un hervidero de aventureros, mercaderes y hechiceros, todos buscando fortuna o gloria.</p>
            <p>La historia comienza en una taberna, el Elfo Cantarín, donde los rumores de tesoros perdidos y mazmorras olvidadas son tan abundantes como la cerveza que fluye libremente. Un grupo de valientes aventureros, cada uno con su propio pasado y ambiciones, se reúne alrededor de una mesa de madera desgastada. Entre ellos, un mago con la mirada perdida en antiguos pergaminos, un guerrero con cicatrices que cuentan su valentía, y un pícaro cuya sonrisa astuta apenas oculta su naturaleza escurridiza.</p>
            <p>Juntos, deciden emprender un viaje hacia las ruinas de una fortaleza enana, donde se dice que yace un artefacto de poder inimaginable. Atravesando bosques encantados y montañas traicioneras, enfrentan criaturas de pesadilla y descubren alianzas inesperadas. Con cada paso, la magia del lugar teje su destino, llevándolos más cerca del corazón de los Reinos Olvidados, donde el verdadero poder yace en los lazos de camaradería y en la fuerza de la espada.</p>
            <p>Así se forja la leyenda en Baldur’s Gate, donde cada esquina puede ser el inicio de una nueva saga y cada amanecer trae consigo la promesa de aventuras sin límites.</p>
          </small>
        </Col>
      </Row>
      <Row className='text-center bgd-flex justify-content-center'>
        {/* <Col xs={12} md={8}>
          <img src={bg} alt="Imagen descriptiva de baldur's gate" style={{width: '100%', height: 'auto'}} className='pb-3'/>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Inicio;
