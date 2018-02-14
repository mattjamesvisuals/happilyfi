import React, { Component } from 'react';
import Button from '../Button';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { happinessReceiver: '' };
  }

  clickHandler(e) {
    const happyPerson = this.textInput.value;
    this.setState({ happinessReceiver: happyPerson });
  };

  render() {
    return (
    <div className="background">
      <form>
        <input
          className="input"
          type="text"
          placeholder="Name"
          ref={(input) => { this.textInput = input; }}
        />
        <br />
        <Button name="Send Happiness" onClick={this.clickHandler}/>
      </form>
      <div className= "receivedMessage">You sent {this.state.happinessReceiver} Happiness!</div>

    </div>
    );
  }
}
export default Form;
