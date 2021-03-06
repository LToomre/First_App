import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

let styles;

class RailroadDialog extends Component {
  state = {};

  render() {
    return <Fragment key={"create-railroad"} />;
  }
}

styles = theme => ({});

RailroadDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

RailroadDialog.defaultProps = {};

export default withStyles(styles)(RailroadDialog);
