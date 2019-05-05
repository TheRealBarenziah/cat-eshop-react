import React, { Component } from 'react';
import {Button} from 'reactstrap';
import MySexyButton from '../mySexyButton/mySexyButton';

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
      <div>
        Qty: {this.state.count}
        <MySexyButton sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <MySexyButton sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button
          color='success'
          onClick={() => console.log('Someday I will do stuff.')}
        >Buy !</Button>
      </div>
    );
  }
}
