import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      buttonName,
      clickHandler,
      type
    } = this.props;

    return (
      <input
        type={type}
        className='button'
        value={buttonName}
        onClick={clickHandler}
      />
    );
  }
}
export default Button;
