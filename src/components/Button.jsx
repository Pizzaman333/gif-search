import React, { Component } from 'react';
import '../styles/Button.scss';

class Button extends Component {
  render() {
    return (
      <button className="load-more" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;