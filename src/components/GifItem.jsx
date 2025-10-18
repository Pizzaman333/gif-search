import React, { Component } from 'react';
import '../styles/GifItem.scss';

class GifItem extends Component {
  render() {
    const { src, alt, onClick } = this.props;
    return (
      <li className="gif-item" onClick={onClick}>
        <img src={src} alt={alt} />
      </li>
    );
  }
}

export default GifItem;