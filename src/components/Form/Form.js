import React, { Component } from 'react';
import Button from '../Button';


class Form extends Component {
  render() {
    return (
    <div className="background">
      <form>
        <input className="input" input type="text" placeholder="HappilyFi Anyone!"/>
        <Button/>
      </form>

    </div>
    );
  }
}
export default Form;
