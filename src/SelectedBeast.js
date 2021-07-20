import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './SelectedBeast.css'


class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.renderModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title} ></img>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
