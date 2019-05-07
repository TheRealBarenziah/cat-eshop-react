import React from 'react';
import Slider from '../Slider/Slider';
import { Container, Col, Row } from 'reactstrap';

export default function HomePage() {
  return (
    <Container className='my-container-margin-top'>
      <Row>
        <Col>
          <Slider />
        </Col>
      </Row>
    </Container>  );
}
