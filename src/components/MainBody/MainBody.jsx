import React, { Component }  from 'react';
import { Container, Col, Row, Spinner } from 'reactstrap';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import axios from 'axios';
import CatCard from '../CatCard/CatCard';

export default class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      cats: [{breeds:[{id:'hello world'}], url:'helloUrl'}],
      filteredCats: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({loading: false});
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
      <div>
        <Container>
          <Row>
            <p>{this.state.cats[0].breeds[0].description}</p>
          </Row>
          <Row>
            {this.state.cats.map((cat, idx) => {
              return (
                <Col xs='4' key={idx}>
                  <CatCard {...cat}/>
                </Col>
              );
            })}
            
          </Row>
        </Container>
      </div>
    );
  }
}
