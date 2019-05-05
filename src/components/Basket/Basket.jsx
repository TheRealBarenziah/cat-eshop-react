/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: false
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeUnmountOnClose(e) {
    let value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  render() {
    return (
      <div>
        <Button 
          color="success" 
          onClick={this.toggle}
          size='lg'
        >My Basket
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
          <ModalHeader toggle={this.toggle}>Basket</ModalHeader>
          <ModalBody>
            <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Continue Shopping</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Proceed to buy</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Basket);

// To return to default example: pass unmountOnClose: true in constructor and put snippet below in 1st FormGroup under Label

/* <Form inline onSubmit={(e) => e.preventDefault()}>
  <FormGroup>
    <Label for="unmountOnClose">Modal memory:</Label>{' '}
           
    <Input type="select" name="unmountOnClose" id="unmountOnClose" onChange={this.changeUnmountOnClose}>
      <option value="true">true(modal will forget)</option>
      <option value="false">false(modal wont forget)</option>
    </Input>
  </FormGroup>
  {' '}
  <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
</Form>; */