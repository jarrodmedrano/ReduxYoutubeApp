import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
const API_KEY = 'AIzaSyDmfK88i5f08cvkS5wL08uNkNuj9OaHBbg';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos)  => {
      this.setState({ videos });
      //this .setState({videos: videos});
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
