import React, { Component } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import logo from '../../img/wink.png';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happinessReceiver: '',
      countdownTimer: 10,
      showTimer: false,
      showFinalMessage: false,
      showHappyModal: false,
      selectedOption: 10,
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const happyPerson = this.textInput.value;
    const happyEmail = this.emailInput.value;
    console.log(happyEmail);
    this.textInput.value = "";
    this.initializeCountdown(happyPerson);
    this.setState({
    happinessReceiver: happyPerson,
    showHappyModal: true,
    });
  }

  handleOptionChange = (e) => {
    console.log(e);
    const time = e.target.value;
    this.setState({
    selectedOption: time,
    });
    console.log(time);
  }


  initializeCountdown = (happyPerson) => {
    this.setState({
      showTimer: true,
      countdownTimer: this.state.selectedOption
    });
    const timeinterval = setInterval(() => {
      const numSecondsRemaining = this.state.countdownTimer - 1;
      this.setState({
        countdownTimer: numSecondsRemaining,
      });
      if (this.state.countdownTimer <= 0) {
        clearInterval(timeinterval);
        this.setState({
          countdownTimer: this.state.selectedOption,
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
          type="radio"
          checked={this.state.selectedOption === '10'}
          onChange={this.handleOptionChange}
          name="timeValue"
          value="10"
          id="ten"
          />
        <label>10 seconds</label>
        <input
          type="radio"
          checked={this.state.selectedOption === '30'}
          onChange={this.handleOptionChange}
          name="timeValue"
          value="30"
          id="thirty"
          />
        <label>30 seconds</label>
        <input
          type="radio"
          checked={this.state.selectedOption === '60'}
          onChange={this.handleOptionChange}
          name="timeValue"
          value="60"
          id="sixty"
        />
        <label>60 seconds</label>
        <br/>
        <input
            onClick={this.onChangeHandler}
            className="input"
            type="text"
            placeholder="Send Happiness To..."
            ref={(input) => { this.textInput = input; }}
          />
          <br />
          <input
              className="input"
              type="text"
              placeholder="Add Email Address"
              ref={(input) => { this.emailInput = input; }}
            />
            <br/>
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
