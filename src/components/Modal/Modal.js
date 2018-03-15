import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

class Modal extends React.Component {
  render() {
    const {
      onClose,
      showCloseButton,
      closeOnMouseOut,
      show,
      children,
    } = this.props;

    // Render nothing if the "show" prop is false
    if (!show) {
      return null;
    }

    return (
      <div className="backdrop" className='modalbackdrop'>
        <div className='modalstyle' onMouseOut={closeOnMouseOut ? onClose : ''}>
          {showCloseButton &&
            <button type="button" className="closemodal" onClick={onClose}>×</button>
          }
          <div className= 'modalcontent'>
            {children}
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
  showCloseButton: PropTypes.bool.isRequired,
  closeOnMouseOut: PropTypes.bool.isRequired,
};

export default Modal;
