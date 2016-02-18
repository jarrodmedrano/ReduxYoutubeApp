import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    console.log(this.state);
    return <input
      value={this.state.term}
      onChange={this.onInputChange.bind(this)} />;
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }
}

export default SearchBar;