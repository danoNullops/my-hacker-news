import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
        title="My Hacker News"
        onLeftIconButtonTouchTap={this.handleToggle}
      >
        <Drawer
          docked={false}
          open={this.state.open}
          label="Drawer Menu"
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>My Saved Articles</MenuItem>
        </Drawer>
      </AppBar>
    );
  }
}

export default NavBar;
