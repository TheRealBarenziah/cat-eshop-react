import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button } from 'reactstrap';
import DropdownButton from '../DropdownButton/DropdownButton';
import Basket from '../Basket/Basket';
import { withRouter } from 'react-router-dom';
import './Navbar.scss';

class Navnav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  render() {
    return (
      <div className='myNavNav'>
        <Navbar color="light" light expand="md" className='fixed-top'>
          <NavbarBrand href="/">CatRat</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <DropdownButton />
              </NavItem>
              <NavItem>
                <Button  
                  color='danger'
                  size='lg'
                  onClick={
                    this.props.location.pathname !== '/random-image' ? 
                      () => { this.props.history.push('/random-image');}:
                      () => { this.props.history.push('/');}
                  }
                >
                  {
                    this.props.location.pathname !== '/random-image'? 
                      'HOT DEAL':
                      'Back Home'
                  }
                </Button>
                {/* <NavLink href="/random-image">Random Cat image</NavLink> */}
              </NavItem>
              <NavItem>
                <Basket />
              </NavItem>
              <ButtonDropdown 
                isOpen={this.state.dropdownOpen} 
                toggle={this.toggle}
                direction={(['down'])}
              >
                <DropdownToggle caret>
                  More... 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/about">About us</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/legal-mentions">Legal Mentions</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://github.com/TheRealBarenziah/cat-eshop-react" target="_blank">GitHub</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <NavItem>
                <Button 
                  color='primary' 
                  size='lg'>Log in</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navnav);

