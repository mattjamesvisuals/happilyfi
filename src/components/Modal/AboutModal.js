
import React, { Component } from 'react';
import Modal from './Modal';
import logo from '../../img/wink.png';
import '../../App.css';



const AboutModal = ({
  show,
  onClose,
}) => (
  <Modal
  show={show}
  className='aboutModal'
  onClose={onClose}
  closeOnMouseOut={false}
  showCloseButton={true}
>
  To increase your happiness, all you have to do is randomly wish for somebody else to be happy.
  Just think, "I wish for this person to be happy." This person could be a friend, family member, celebrity, anyone at all.
  Thats it!. Just think—this is an entirely thinking exercise.
  The entire exercise is just 10 seconds worth of thinking. You will emerge from this exercise smiling, happier than 10 seconds before!
  <br/><br/>
  This is the joy of loving-kindness. It turns out that being on the giving end of a kind thought is rewarding in and of itself.
  To increase your happiness, all you have to do is randomly wish for somebody else to be happy.
  That is all. It basically takes no time and no effort.
  <div className='modalimage'>
    <img src={logo} className="App-logo" alt="logo"/>
  </div>
</Modal>);

export default AboutModal;
