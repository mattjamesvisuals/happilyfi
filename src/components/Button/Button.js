import React, { Component } from 'react';

class Button extends Component {
  render() {
    const buttonName =this.props.name;
    return (
    <input type="button" className='button' value={buttonName}/>
    );
  }
}
export default Button;
