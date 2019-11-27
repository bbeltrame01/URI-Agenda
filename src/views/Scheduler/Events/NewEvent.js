import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import PropTypes from 'prop-types';

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
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
            <Form onSubmit={this.props.onSave}>
              <Modal.Body>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" value={this.props.titleValue} onChange={this.props.handleChangeEventTitle} placeholder="Digite o nome do evento" required />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" id="btn-excluir" onClick={this.props.onDelete}>
                  Excluir
                </Button>
                <Button variant="secondary" onClick={this.props.onHide}>
                  Fechar
                </Button>
                <Button variant="success" type="submit">
                  {this.props.nomeSubmit}
                </Button>
               
              </Modal.Footer>
            </Form>
        </Modal>
      </>
    );
  } 
}

ModalEvent.propTypes = {
  onHide: PropTypes.func.isRequired,
  handleChangeEventTitle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  handleChangeEventDesc: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  titleValue: PropTypes.string,
  descValue: PropTypes.string,
  title: PropTypes.string,
  nomeSubmit: PropTypes.string,
  css: PropTypes.string
};

export default ModalEvent