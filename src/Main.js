import React from 'react';
import data from './data.json';
import HornedBeast from './HornedBeast.js'
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  
  render() {
    let renderedBeasts = [];

    data.forEach((beastComponents, index) => {
        let beast = <HornedBeast
          key={index}
          title={beastComponents.title}
          imageUrl={beastComponents.image_url}
          description={beastComponents.description}
        />
        renderedBeasts.push(beast);
      });
    return (
      <main>
        <CardColumns>
          {renderedBeasts}
        </CardColumns>
      </main>
    );
  }
}
export default Main;
