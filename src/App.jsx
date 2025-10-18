import React, { Component } from 'react';
import GifSearch from './components/GifSearch';
import GifList from './components/GifList';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import './styles/App.scss';

const API_KEY = 'q8R8H6HgmxJfc5eLZiYNAqnSmWfXD0YV'; // Replace with your actual Giphy API key
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const PER_PAGE = 12;

class App extends Component {
  state = {
    gifs: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeGifURL: '',
    totalCount: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchGifs();
    }
  }

  fetchGifs = async () => {
    const { query, page } = this.state;
    const offset = (page - 1) * PER_PAGE;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=${PER_PAGE}&offset=${offset}&rating=g&lang=en`
      );
      const data = await response.json();
      if (data.data) {
        this.setState((prevState) => ({
          gifs: page === 1 ? data.data : [...prevState.gifs, ...data.data],
          totalCount: data.pagination.total_count,
        }));
      } else {
        this.setState({ error: 'No GIFs found.' });
      }
    } catch (err) {
      this.setState({ error: 'Failed to fetch GIFs.' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = (newQuery) => {
    if (newQuery !== this.state.query) {
      this.setState({
        query: newQuery,
        page: 1,
        gifs: [],
        totalCount: 0,
        error: null,
      });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  openModal = (url) => {
    this.setState({ largeGifURL: url, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeGifURL: '' });
  };

  render() {
    const { gifs, isLoading, error, showModal, largeGifURL, totalCount } = this.state;
    const hasMoreGifs = gifs.length < totalCount;

    return (
      <div className="app">
        <GifSearch onSubmit={this.handleSubmit} />
        {error && <p className="error">{error}</p>}
        <GifList gifs={gifs} onGifClick={this.openModal} />
        {isLoading && <Loader />}
        {gifs.length > 0 && !isLoading && hasMoreGifs && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal largeGifURL={largeGifURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;