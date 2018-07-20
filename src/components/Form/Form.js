import React, { Component } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import logo from '../../img/wink.png';

class Form extends Component {
  constructor(props) {
    super(props);
    this.counterSeconds = 10;
    this.state = {
      happinessReceiver: '',
      countdownTimer: this.counterSeconds,
      showTimer: false,
      showFinalMessage: false,
      showHappyModal: false,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const happyPerson = this.textInput.value;
    this.textInput.value = "";
    this.initializeCountdown(happyPerson);
    this.setState({
    happinessReceiver: happyPerson,
    showHappyModal: true,
    });
  }


  initializeCountdown = (happyPerson) => {
    this.setState({ showTimer: true });
    const timeinterval = setInterval(() => {
      const numSecondsRemaining = this.state.countdownTimer - 1;
      this.setState({
        countdownTimer: numSecondsRemaining,
      });
      if (this.state.countdownTimer <= 0) {
        clearInterval(timeinterval);
        this.setState({
          countdownTimer: this.counterSeconds,
          showTimer: false,
          showFinalMessage: true,
          showHappyModal: false,

        });
      }
    }, 1000);
  }
  onChangeHandler = () => {
    this.setState({
    showFinalMessage: false,
    });
  }

  render() {
    return (
      <div className="background">
        {this.state.showFinalMessage && (
          <div className= "receivedMessage">
              You Sent {this.state.happinessReceiver} Happiness!
          </div>
        )}
        <form onSubmit={this.submitHandler}>
          <input
            onClick={this.onChangeHandler}
            className="input"
            type="text"
            placeholder="Send Happiness To..."
            ref={(input) => { this.textInput = input; }}
          />
          <br />
          <Button
            buttonName="Send Happiness"
            type="submit"
          />
        </form>
        <Modal show={this.state.showHappyModal}
          className='sendModal'
          onClose={this.toggleModal}
          closeOnMouseOut={false}
          showCloseButton={false}
        >
          Send Happy Thoughts To {this.state.happinessReceiver} for: {this.state.countdownTimer}
          <div><img src={logo} className="sent-logo" alt="logo"/></div>
        </Modal>
      </div>
    );
  }
}
export default Form;
