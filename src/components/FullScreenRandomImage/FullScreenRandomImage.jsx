import React, { Component } from 'react';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import { withRouter } from 'react-router-dom';

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
      return (
        <img src={this.state.cats[0].url} alt={this.state.cats[0].id} />

      );
    }
}

export default withRouter(FullScreenRandomImage);