import React from 'react';
import HornedBeast from './HornedBeast.js'

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
          title="Nick Carter"
          imageUrl="https://i.pinimg.com/originals/29/d1/23/29d123728aeabb05c078c33c88a6bdb8.jpg"
          description="Wild animal in nature"
        />
        <HornedBeast
          title="The Dark Lord"
          imageUrl="https://www.telegraph.co.uk/content/dam/on-demand/2018/11/14/sabrinadarklord_trans_NvBQzQNjv4BqSKF59OnKiLVrHvhXZqwEuMDfOYGcSuqswKO1-ryZkcw.jpg?imwidth=480"
          description="The wildest of beasts"
        />
      </>
    )
  }
}
export default Main;
