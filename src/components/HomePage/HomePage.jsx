import React from 'react';
import DropdownButton from '../DropdownButton/DropdownButton';
import Slider from '../Slider/Slider';
import { Container, Col, Row } from 'reactstrap';
import Basket from '../Basket/Basket';

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs='9'>
          <Slider />
          <DropdownButton />
        </Col>
        <Col xs='3'>
          <Basket />
        </Col>
      </Row>
    </Container>  );
}
