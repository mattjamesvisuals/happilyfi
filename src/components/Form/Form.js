import React, { Component } from 'react';
import Button from '../Button';


class Form extends Component {
  render() {
    return (
    <div className="background">
      <form>
        <input className="inputField" size="50"/>
        <Button/>
      </form>

    </div>
    );
  }
}
export default Form;
