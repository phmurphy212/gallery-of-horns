import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0,
    }
  };
  handleChange = e => {
    this.setState({
      horns: parseInt(e.target.value),
    })
  };

  renderBeasts() {
    if (this.state.horns === 0) {
      return this.props.data.map((beast, index) => (
      <HornedBeast
        handleShowModal={this.props.handleShowModal}
        key={index}
        beast={beast}
      />))
    } else {
      return this.props.data.filter(beast => beast.horns === this.state.horns).map((beast, index) => (
        <HornedBeast
          handleShowModal={this.props.handleShowModal}
          key={index}
          beast={beast}
        />)
      )
    }
  }

  render() {
    return (
      <>
        <main>
          <Container>
            <Form id="myForm">
              <Form.Group>
                <Form.Label>How Many Horns Do You Like?</Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                  <option value="0">Select</option>
                  <option value="1">One Horn</option>
                  <option value="2">Two Horns</option>
                  <option value="3">Three Horns</option>
                  <option value="100">100 Horns</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Container>
          <CardColumns>
            {this.renderBeasts()}
          </CardColumns>
        </main>
      </>
    )
  }
};

export default Main;
