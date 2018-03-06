import React, { Component } from 'react';
import logo from './img/wink.png';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" onMouseOver={this.toggleModal}/>
          <h1 className="App-title">Welcome to HappilyFi!</h1>
        </div>
        <p className="App-intro">
          Send Happy...Get Happy!
        </p>
        <Form/>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          To increase your happiness, all you have to do is randomly wish for somebody else to be happy.
        </Modal>
      </div>
    );
  }
}

export default App;
