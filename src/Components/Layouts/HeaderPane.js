import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

import LocomotiveDialog from "../Dialogs/LocomotiveDialog";

let styles;

class Header extends React.Component {
  render() {
    const {
      classes,
      locomotives,
      railroads,
      onLocomotiveCreate,
      selectLocomotive
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.grow} variant="h5" color="inherit">
              Steam Locomotives
            </Typography>

            <LocomotiveDialog
              locomotive={selectLocomotive}
              locomotives={locomotives}
              onLocomotiveCreate={onLocomotiveCreate}
              railroads={railroads}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1,
    flex: 1
  },
  menuButton: {
    marginLeft: -24,
    marginRight: 5
  }
});

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

Header.defaultProps = {};

export default withStyles(styles)(Header);
