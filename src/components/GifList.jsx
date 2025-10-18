import React, { Component } from 'react';
import GifItem from './GifItem';
import '../styles/GifList.scss';

class GifList extends Component {
  render() {
    const { gifs, onGifClick } = this.props;
    return (
      <ul className="gif-list">
        {gifs.map((gif) => (
          <GifItem
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title || 'GIF'}
            onClick={() => onGifClick(gif.images.original.url)}
          />
        ))}
      </ul>
    );
  }
}

export default GifList;