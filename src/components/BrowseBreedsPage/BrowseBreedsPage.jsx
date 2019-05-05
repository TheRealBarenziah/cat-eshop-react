import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import MainBody from '../MainBody/MainBody';

class BrowseBreedsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }
  
  render(){
    let currentUrl = this.props.location.pathname;
    let currentCategory = currentUrl.split('/')[2];
    return (
      <Container>
        <Row>
          <Col>
            {<MainBody category={currentCategory}/>}
          </Col>
        </Row>
      </Container>  );
  }
}

export default withRouter(BrowseBreedsPage);