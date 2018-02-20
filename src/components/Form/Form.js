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
      showFinalMessage: false,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const happyPerson = this.textInput.value;
    this.textInput.value = "";
    this.initializeCountdown(happyPerson);
    this.setState({
    happinessReceiver: happyPerson,
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
        <form onSubmit={this.submitHandler}>
          <input onClick={this.onChangeHandler}
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
        {this.state.showFinalMessage && (
          <div className= "receivedMessage">
              You sent {this.state.happinessReceiver} Happiness!
          </div>
        )}
        {this.state.showTimer && (
          <div className="countdownTimer">
            Send happy thoughts to {this.state.happinessReceiver} for: {this.state.countdownTimer}
          </div>
        )}
      </div>
    );
  }
}
export default Form;
