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
        <Header triggerAbout={this.toggleModal} aboutText="About"/>
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to HappilyFi!</h1>
        </div>
        <p className="App-intro">
          Send Happy...Get Happy!
        </p>
        <Form/>
        <Modal show={this.state.isOpen}
          className='aboutModal'
          onClose={this.toggleModal}>
          To increase your happiness, all you have to do is randomly wish for somebody else to be happy.
          Just think, "I wish for this person, could be a friend, family member, celebrity, anyone at all, to be happy."
          That is it. Just think—this is an entirely thinking exercise.
          The entire exercise is just 10 seconds worth of thinking. You will emerge from this exercise smiling, happier than 10 seconds before!
          <br/>
          <br/>
          This is the joy of loving-kindness. It turns out that being on the giving end of a kind thought is rewarding in and of itself
          . . . . All other things being equal, to increase your happiness, all you have to do is randomly wish for somebody else to be happy.
          That is all. It basically takes no time and no effort.
          <div class='modalimage'><img src={logo} className="App-logo" alt="logo"/></div>
        </Modal>
      </div>
    );
  }
}

export default App;
