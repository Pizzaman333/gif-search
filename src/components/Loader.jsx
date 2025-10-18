import React, { Component } from 'react';
import { Oval } from 'react-loader-spinner';
import '../styles/Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Oval color="#3f51b5" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;