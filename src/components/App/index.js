import React, { Component } from 'react';
import { brown50 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

import NavBar from '../NavBar';
import NewsItemList from '../NewsItemList';

// import logo from './logo.svg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        console.log(results);
        this.setState({
          news: results.data.hits
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        accent1Color: brown50
      }
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <NavBar />
          <div className="container">
            <div className="row">
              <div className="col-md-offset-3 col-md-6">
                <NewsItemList news={this.state.news} />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


// render() {
//   return (
//     <div className="App">
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Welcome to React</h2>
//       </div>
//     </div>
//   );
// }
