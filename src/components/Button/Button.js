import React, { Component } from 'react';

class Button extends Component {
  render() {
    const buttonName =this.props.name;
    const clickHandler =this.props.clickHandler;
    return (
    <input type="button" className='button' value={buttonName} onClick={clickHandler}/>
    );
  }
}
export default Button;
