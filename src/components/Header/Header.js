import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {
      aboutText,
      triggerAbout
    } = this.props;

    return (
      <div className= "headerContainer">
        <ul className= "navigation">
          <li onMouseOver={triggerAbout}>{aboutText}</li>
          <li>Blog</li>
        </ul>
      </div>
    );
  }
}
export default Header;
