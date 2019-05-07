import React, { Component } from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import MySexyButton from '../mySexyButton/mySexyButton';
import './CatCard.scss';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <Container className='myCatCard'>
        <Row>
          <Col 
            xs='6' 
          >
            <p className='myQty'>
            Qty: <strong>{this.state.count}</strong></p>
          </Col>
          <Col      
            xs='2'    
            className='myCounterButton'
          >
            <MySexyButton 
              className='mySexButton'
              sign="-" 
              count={this.state.count} 
              updateCount={this.handleCount.bind(this)} />
          </Col>
          <Col     
            className='myCounterButton'
            xs='2'
          >
            <MySexyButton 
              sign="+" 
              count={this.state.count} 
              updateCount={this.handleCount.bind(this)} />
          </Col>
          <Col xs='12'>
            <Button
              size='lg'
              className='buy-button'
              color='success'
              onClick={() => console.log('Someday I will do stuff.')}
            >Buy !</Button>
          </Col>
        </Row>
      </Container>     );
  }
}
