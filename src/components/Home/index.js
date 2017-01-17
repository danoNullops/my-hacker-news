import React, { Component } from 'react';
import axios from 'axios';

import NewsItemList from '../NewsItemList';
import Search from '../Search';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews(searchVal) {
    const url = searchVal
      ? `http://hn.algolia.com/api/v1/search?query=${searchVal}`
      : `http://hn.algolia.com/api/v1/search?tags=front_page`;

    axios.get(url)
      .then(results => {
        this.setState({
          news: results.data.hits
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  saveUserNewsItem(item) {
    axios.post('/api/user-articles', {
      url: item.url,
      title: item.title,
      author: item.author,
      date: item.created_at
      // created_at gets added automatically with new Date() value
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="text-center search-box">
          <Search getNews={this.getNews.bind(this)} />
        </div>
        <NewsItemList
          title="Today's News"
          news={this.state.news}
          saveUserNewsItem={this.saveUserNewsItem.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
