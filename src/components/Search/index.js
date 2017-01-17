import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.getNews(this.state.search);
  }

  setSearchValue(e) {
    e.preventDefault();
    const { value } = e.target;
    if (value === 13) {
      this.clickHandler.call(this, e);
    }
    this.setState({ search: value });
  }

  render() {
    return (
      <form className="form-inline">
        <TextField
          defaultValue={this.state.search}
          floatingLabelText="Search"
          onKeyUp={this.setSearchValue.bind(this)}
        />
        <RaisedButton
          label="Go"
          primary={true}
          className="search-btn"
          onClick={this.clickHandler.bind(this)}
        />
      </form>
    );
  }
}

export default Search;
