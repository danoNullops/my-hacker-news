import React, { Component } from 'react';
import axios from 'axios';

import NewsItemList from '../NewsItemList';

import './style.css';

class SavedArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: []
    };
  }

  componentDidMount() {
    this.getUserNewsItems();
  }

  getUserNewsItems() {
    axios.get('/api/user-articles')
      .then(results => {
        this.setState({
          saved: results.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="SavedArticles">
        <NewsItemList
          title="My Saved Articles"
          news={this.state.saved}
          saveUserNewsItem={null}
        />
      </div>
    );
  }
}

export default SavedArticles;
