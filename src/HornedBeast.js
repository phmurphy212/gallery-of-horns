import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <main>
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.description}>
        </img>
        <p>{this.props.description}</p>
      </main>
    )
  }
}
export default HornedBeast;
