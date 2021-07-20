import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // favorites: 0,
    }
  }

  render() {
    return (
      <Card className="cards">
        <h3>{this.props.beast.title}</h3>
        <Card.Img
          variant="top"
          onClick={() => this.props.handleShowModal(this.props.beast)}
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          title={this.props.beast.title}
        />
        <Card.Body>
          {/* <button onClick={this.props.favorites}>Add To Favorites</button> */}
          <p>{this.props.beast.description}</p>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeast;
