import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyDmfK88i5f08cvkS5wL08uNkNuj9OaHBbg';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos)  => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this .setState({videos: videos});
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
