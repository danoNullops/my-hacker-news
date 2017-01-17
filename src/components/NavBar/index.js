import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import './style.css';
import logo from './code.png';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <AppBar
        title={
          <Link to="/">
            <img className="logo" src={logo} alt=""></img>
            <span className="title">My Hacker News</span>
          </Link>
        }
        onLeftIconButtonTouchTap={this.handleToggle}
      >
        <Drawer
          docked={false}
          open={this.state.open}
          label="Drawer Menu"
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onTouchTap={this.handleClose}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to="/saved">My Saved Articles</Link>
          </MenuItem>
        </Drawer>
      </AppBar>
    );
  }
}

export default NavBar;
