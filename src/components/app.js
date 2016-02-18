import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
const API_KEY = 'AIzaSyDmfK88i5f08cvkS5wL08uNkNuj9OaHBbg';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
