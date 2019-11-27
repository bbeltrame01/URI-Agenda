import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

//import {handleClose, handleShow} from './EventStatus';


class ModalEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        modalShow: false
    };
  }

  render() {
    return (
      <>
{/*         <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.onHide}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } 
}
/* 

export function ModalEvent() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
} */

ModalEvent.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default ModalEvent