import React, { Component }  from 'react';
import { Container, Col, Row, Spinner } from 'reactstrap';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CatCard from '../CatCard/CatCard';
import './MainBody.scss';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      cats: [{breeds:[{id:'hello world', name:'Oopsie! You shouldnt see that'}], url:'http://placekitten.com/100/100'}],
      filteredCats: [],
      loading: true
    };
  }

  componentDidMount = async () => {
    await this.setState({loading: false});
    await this.fetchApi(this.state.category);

    console.log('MainBo did mount; url should be ' + this.props.location.pathname);

  }

  fetchApi = async (category) => {
    await axios.get(`${apiUrl}/images/search?limit=48&breed_id=${category}&x-api-key=${apiKey}`)
      .then(res => {
        const cats = res.data;
        this.setState({ cats, category: this.props.category, loading: false });
      });
    await console.log('I am mainbody,this state = ' + this.state.cats[0].url + ' AND CATEGORY IS ' + category);
  }

  componentDidUpdate = async (prevProps) => {
    if (JSON.stringify(this.props.category) !== JSON.stringify(prevProps.category)) {
      await this.setState({loading: true});
      await this.fetchApi(this.props.category);
      console.log('Component did update (mainbody)');
    }
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
      <Container className='my-container-margin-top mainBody' id='myAnnoyingContainer'>
        <Row xs='12'>
          <Col xs='12'>     
            <h1 className='mainBodyTitle'>{this.state.cats[0].breeds[0].name}</h1>
          </Col>
          <Col xs='12'>     
            <p className='myDescription'>{this.state.cats[0].breeds[0].description}</p>
          </Col>
        </Row>
        <Row xs='12'>
          {this.state.cats.map((cat, idx) => {
            return (
              <Col xs='6' key={idx}>
                <CatCard {...cat}/>
              </Col>
            );
          })}
            
        </Row>
      </Container>
    );
  }
}

export default withRouter(MainBody);