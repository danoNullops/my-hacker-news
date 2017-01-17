import React, { Component } from 'react';
import { brown50 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

import NavBar from '../NavBar';
import NewsItemList from '../NewsItemList';
import Search from '../Search';

// import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: brown50
  }
});

class App extends Component {
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
      url: 'http://mks.io/learn',
      title: 'Recursive Stuff',
      author: 'Somebody',
      date: '2017-01-17T18:16:20.674Z'
      // created_at gets added automatically with new Date() value
    })
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8 main-content">
                <div className="text-center search-box">
                  <Search getNews={this.getNews.bind(this)} />
                </div>
                <NewsItemList
                  news={this.state.news}
                  saveUserNewsItem={this.saveUserNewsItem.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
