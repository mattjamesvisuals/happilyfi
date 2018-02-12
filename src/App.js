import React, { Component } from 'react';
import logo from './img/wink.png';
import './App.css';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HappilyFi!</h1>
        </header>
        <p className="App-intro">
          Send them some happiness today.
        </p>
        <Form/>
      </div>
    );
  }
}

export default App;
