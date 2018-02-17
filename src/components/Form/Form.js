import React, { Component } from 'react';
import Button from '../Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.counterSeconds = 10;
    this.state = {
      happinessReceiver: '',
      countdownTimer: this.counterSeconds,
      showTimer: false,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const happyPerson = this.textInput.value;
    this.textInput.value = "";
    this.initializeCountdown(happyPerson);
  };

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
          happinessReceiver: happyPerson,
          showTimer: false,
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div className="background">
        <form onSubmit={this.submitHandler}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            ref={(input) => { this.textInput = input; }}
          />
          <br />
          <Button
            buttonName="Send Happiness"
            type="submit"
          />
        </form>
        {this.state.happinessReceiver && (
          <div className= "receivedMessage">
              You sent {this.state.happinessReceiver} Happiness!
          </div>
        )}
        {this.state.showTimer && (
          <div className="countdownTimer">
            {this.state.countdownTimer}
          </div>
        )}
      </div>
    );
  }
}
export default Form;
