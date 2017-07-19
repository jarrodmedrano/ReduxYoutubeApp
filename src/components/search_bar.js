import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
        <div className="row">
        <div className="col-md-12">
          <div className="form-group mt-1">
            <h1>React/Redux Youtube Video Search</h1>
            <input className="search-bar text-left form-control" value={this.state.term} onChange={this.onInputChange.bind(this)} placeholder="Search" />
          </div>
          </div>
        </div>
    );
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
    this.props.onSearchTermChange(event.target.value);
  }
}

export default SearchBar;