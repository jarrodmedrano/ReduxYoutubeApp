import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-24">
       <input className="search-bar" value={this.state.term} onChange={this.onInputChange.bind(this)} />
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