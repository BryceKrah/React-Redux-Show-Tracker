import React, { Component } from 'react';
import SearchBar from './search_bar';
import MovieList from './movie_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
