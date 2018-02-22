import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {

    } = this.props;

    return (
      <div className= "headerContainer">
        <ul className= "navigation">
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
    );
  }
}
export default Header;
