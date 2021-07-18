import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0,
      showFavorite: false,
    }
  }
  addFavorite = () => {
    this.setState({
      favorited: this.state.favorited + 1,
    });
  }

  favorite = () => {
    this.setState({
      showFavorite: true,
    });
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
          <button onClick={this.addFavorite}>Add To Favorites</button>
          <p>{this.state.favorited ? `${this.state.favorited} 💜` : ''}</p>
          <p onClick={this.favorited}>{this.props.beast.description}</p>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeast;
