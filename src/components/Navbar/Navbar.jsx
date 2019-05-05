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
  Button } from 'reactstrap';
import DropdownButton from '../DropdownButton/DropdownButton';
import Basket from '../Basket/Basket';
import { withRouter } from 'react-router-dom';

class Navnav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
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
                      'GET HOT DEAL':
                      'Go back Home'
                  }
                </Button>
                {/* <NavLink href="/random-image">Random Cat image</NavLink> */}
              </NavItem>
              <NavItem>
                <Basket />
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More...
                </DropdownToggle>
                <DropdownMenu right>
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
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navnav);