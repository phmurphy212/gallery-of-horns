import React from 'react';
import Button from 'react-bootstrap/Button';
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
    })
  }

  unFavorite = () => {
    this.setState({
      favorited: this.state.favorited - 1,
    })
  }

  favorite = () => {
    this.setState({
      showFavorite: true,
    })
  }
  render() {
    return (
      <Card className="cards">
        <h3>{this.props.title}</h3>
        <Card.Img
          variant="top"
          onClick={() => {
            this.addFavorite();
          }}
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
        />
        <Card.Body>
          <p>{this.state.favorited ? `${this.state.favorited} 💜` : ''}</p>
          <p onClick={this.favorite}>{this.props.description}</p>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeast;
