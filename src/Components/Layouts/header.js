import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
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
