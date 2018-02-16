import React, { Component } from 'react';
import Button from '../Button';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { happinessReceiver: '' };
  }

  clickHandler = (e) => {
    e.preventDefault();
    const happyPerson = this.textInput.value;
    this.textInput.value = "";
    this.setState({ happinessReceiver: happyPerson });
  };

  render() {
    return (
    <div className="background">
      <form onSubmit={this.clickHandler}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          ref={(input) => { this.textInput = input; }}
        />
        <br />
        <Button name="Send Happiness" clickHandler={this.clickHandler}/>
      </form>
      {this.state.happinessReceiver && (
  <div className= "receivedMessage">
      You sent {this.state.happinessReceiver} Happiness!
  </div>
)
}

    </div>
    );
  }
}
export default Form;
