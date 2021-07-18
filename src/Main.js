import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  manageFavorites = () => {
    this.setState({
      Favorites: this.state.favorites + 1,
    });
  }

  render() {
    let renderedBeasts = this.props.data.map((beast, index) => (<HornedBeast
        handleShowModal={this.props.handleShowModal}
        favoriteHandler={this.state.favorites}
        key={index}
        beast={beast}
      />)
    );
  
    return (
      <main>
        <h2>Favorited Beasts: {this.state.favorites}</h2>
        <CardColumns>
          {renderedBeasts}
        </CardColumns>
      </main>
    );
  }
}
export default Main;
