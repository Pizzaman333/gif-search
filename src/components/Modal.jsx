import React, { Component } from 'react';
import '../styles/Modal.scss';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeGifURL } = this.props;
    return (
      <div className="overlay" onClick={this.handleOverlayClick}>
        <div className="modal">
          <img src={largeGifURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;