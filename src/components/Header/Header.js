import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    const {
      triggerAbout
    } = this.props;

    return (
      <div className= "headerContainer">
        <ul className= "navigation">
          <li onClick={triggerAbout}>About</li>
          <li><a href= '/blog'>Blog</a></li>
        </ul>
      </div>
    );
  }
}
export default Header;
