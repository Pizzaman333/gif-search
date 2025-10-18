import React, { Component } from 'react';
import '../styles/GifSearch.scss';

class GifSearch extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim()) {
      this.props.onSubmit(this.state.inputValue.trim());
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <header className="gif-search">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search GIFs</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for GIFs"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default GifSearch;