import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videos: res.data.items});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I found {this.state.videos.length} videos!
      </div>
    );
  }
};
