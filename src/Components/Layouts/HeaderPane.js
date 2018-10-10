import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import LocomotiveDialog from "../Dialogs/LocomotiveDialog";

let styles;

class Header extends React.Component {
  render() {
    const {
      classes,
      locomotive,
      locomotives,
      railroads,
      onLocomotiveCreate
    } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
            Steam Locomotives
          </Typography>

          <LocomotiveDialog
            locomotive={locomotive}
            locomotives={locomotives}
            onLocomotiveCreate={onLocomotiveCreate}
            railroads={railroads}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

styles = theme => ({});

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

Header.defaultProps = {};

export default withStyles(styles)(Header);
