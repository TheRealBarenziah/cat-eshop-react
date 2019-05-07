import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import MainBody from '../MainBody/MainBody';
import './BrowseBreedsPage.scss';

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
      <div className='pageContainer'>
        <Container className='annoying-container'>
          <Row>
            <Col xs="12">
              {<MainBody category={currentCategory}/>}
            </Col>
          </Row>
        </Container> 
      </div>    );
  }
}

export default withRouter(BrowseBreedsPage);