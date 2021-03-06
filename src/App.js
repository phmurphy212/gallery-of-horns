import React from 'react';
import data from './data.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        showModal: false,
        selectedBeast: {},
      }
  }
  
  handleShowModal = (selectedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast: selectedBeast,
    });
  }
  
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main data={data} 
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast 
          renderModal={this.state.showModal} handleCloseModal={this.handleCloseModal} 
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
