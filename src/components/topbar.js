import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import logo from '../assets/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    marginRight: 10
  }
};


class TopBar extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <AppBar position="fixed" color="secondary" elevation={0}>
          <Toolbar>

            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" align="left">
              <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={logo} alt="logo" height="50px"/>
            <Typography variant="h6">
              Synthsizers Shop
            </Typography>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
