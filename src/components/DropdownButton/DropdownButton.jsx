import React from 'react';
import axios from 'axios';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import { withRouter } from 'react-router-dom';
import MainBody from '../MainBody/MainBody';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      currentCategory: 'jbob',
      cats: []
    };
  }

  componentDidMount = async () =>  {
    await axios.get(`${apiUrl}/breeds?x-api-key=${apiKey}`)
      .then(res => {
        const cats = res.data;
        this.setState({ cats, filteredCats: cats });
      });
    console.log('Cats = ' + this.state.cats);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleCategoryClick(category) {
    this.setState({ currentCategory: category });
    this.redirect(category);
    console.log('I tried to do stuff l35 and "id" was : ' + category);
  }

  redirect = (breedId) => {
    return this.props.history.push(`/breeds/${breedId}`);
  }

  getCategories(){
    let cats = this.state.cats; 
    let categoriesOfCats = cats.map((cat) => cat.name);
    let filteredCategories = [...new Set(categoriesOfCats)];
    return filteredCategories;}

  render() {
    return (
      <React.Fragment>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size='lg' >
          <DropdownToggle caret color='warning'>
      Get cats by breed
          </DropdownToggle>
          <DropdownMenu>
            {
              this.getCategories().map((category, index) => {
                return <DropdownItem 
                  onClick={() => this.handleCategoryClick(this.state.cats[index].id)}
                  key={`myKey_${index}`}
                >{category}</DropdownItem>;
              })
            }
          </DropdownMenu>
        </ButtonDropdown>
      </React.Fragment>
    );
  }
}

export default withRouter(DropdownButton);