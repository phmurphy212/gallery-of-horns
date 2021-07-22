import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  manageFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  }

  render() {
    return (
      <Card className="cards">
        <h3>{this.props.beast.title}</h3>
        <Card.Img
          variant="top"
          onClick={() => {this.props.handleShowModal(this.props.beast)
          this.manageFavorites()
        }
        }
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          title={this.props.beast.title}
        />
        <Card.Body>
          <p>Favorites: {this.state.favorites}</p>
          <p>{this.props.beast.description}</p>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeast;
