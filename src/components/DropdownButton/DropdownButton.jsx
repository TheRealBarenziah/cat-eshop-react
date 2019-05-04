import React from 'react';
import axios from 'axios';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { apiUrl, apiKey } from '../../utils/apiStuff';
import MainBody from '../MainBody/MainBody';

export default class DropdownButton extends React.Component {
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
    this.forceUpdate();
    console.log('I tried to do stuff l35 and "id" was : ' + category);
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
          <DropdownToggle caret color='success'>
      Select Cat Breed
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
        <MainBody category={this.state.currentCategory}/>
      </React.Fragment>
    );
  }
}

