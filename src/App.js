import React, { Component } from 'react';
import logo from './img/wink.png';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Modal from './components/Modal';
import AboutModal from './components/Modal/AboutModal';

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
        <Header triggerAbout={this.toggleModal}/>
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to HappilyFi!</h1>
        </div>
        <p className="App-intro">
          Send Happy...Get Happy!
        </p>
        <Form/>
        <AboutModal
          show={this.state.isOpen}
          onClose={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
