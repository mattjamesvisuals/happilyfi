import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" className='modalbackdrop'>
        <div className='modalstyle' onMouseOut={this.props.onClose}>
        <button type="button" className="closemodal" data-dismiss="modal">×</button>
          <div className= 'modalcontent'>

            {this.props.children}
          </div>
          <div className="footer">
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
