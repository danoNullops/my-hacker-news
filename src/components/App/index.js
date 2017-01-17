import React from 'react';
import { brown50 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from '../NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: brown50
  }
});

const App = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 main-content">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
