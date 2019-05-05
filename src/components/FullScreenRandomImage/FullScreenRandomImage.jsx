import React, { Component } from 'react';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import '../FullScreenImage/FullScreenImage.scss';

class FullScreenRandomImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats:{url:'www.perdu.com', id:'none'},
      loading: true
    };
  }
    componentDidMount = async () =>  {
      await axios.get(`${apiUrl}/images/search?x-api-key=${apiKey}`)
        .then(res => {
          const cats = res.data;
          this.setState({ cats });
        })
        .catch((err) => console.log(err));
      console.log('Hello, FSRI component here');
      await this.setState({loading: false});
    }

    render() {
      if (this.state.loading) {
        return (
          <React.Fragment>
            <br></br>
            <Spinner color="dark" />
          </React.Fragment>
        );
      }
      let cat = this.state.cats[0];
      return ( 
        <div className='mySexyFullScreenImage'>
          <h1>Prime deal !</h1>
          <h3>Specimen tag: '{cat.id}'</h3>
          <p>Price: {cat.height} $ USD, VAT included</p>

          <img src={cat.url} alt={cat.id} className='myBigRandomImg' />
        </div>  
      );
    }
}

export default withRouter(FullScreenRandomImage);