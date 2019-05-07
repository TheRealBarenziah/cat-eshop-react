import React, { Component } from 'react';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './FullScreenImage.scss';

class FullScreenImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats:{url:'www.perdu.com'},
      id:'daHxeTPgZ'
    };
  }
    componentDidMount = async () =>  {
      await axios.get(`${apiUrl}/images/${this.props.match.params.id}?x-api-key=${apiKey}`)
        .then(res => {
          const cats = res.data;
          this.setState({ cats });
        })
        .catch((err) => console.log(err));
      console.log(`${apiUrl}/images/${this.props.match.params.id}?x-api-key=${apiKey}`);
    }

    render() {
      console.log('Hello! FullScreenImage component rendered');
      return (
        <div className='mySexyFullScreenImage my-container-margin-top'>
          <h3>Specimen tag: '{this.state.cats.id}'</h3>
          <p>Price: {this.state.cats.height} $ USD, VAT included</p>
          <img src={this.state.cats.url} alt={Math.random()} className='myBigTargetImg' />
        </div>     

      );
    }
}

export default withRouter(FullScreenImage);