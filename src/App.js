import React, { Component } from 'react';
import logo from './img/wink.png';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HappilyFi!</h1>
        </div>
        <p className="App-intro">
          HappilyFi Someone and <b>You</b> Today!
        </p>
        <Form/>
      </div>
    );
  }
}

export default App;
