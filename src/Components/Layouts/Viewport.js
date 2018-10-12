import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

let styles;

/**
 * This is a development component Lars Toomre has used to experiment with
 * reactive breakpoints while developing his first app.  Reminder that the
 * viewport of the Samsung S7 edge device is 360px x 640px.
 */

class Viewport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, breakpoint: "" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const w = window.innerWidth;
    const bk = this.props.theme.breakpoints.values;
    const bp = this.getBreakpoints();
    console.log(w, bp);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  getBreakpoints() {
    var bp = new Object();
    const bk = this.props.theme.breakpoints.values;
    const keys = Object.keys(bk);
    let start = Object.values(bk).slice(0);
    for (var i = 0, len = keys.length; i < len; i++) {
      var end = 9999;
      if (i < len - 1) end = start[i + 1] - 1;
      bp[keys[i]] = end;
    }
    return bp;
  }

  render() {
    const { classes, theme } = this.props;
    const { width, height, breakpoint } = this.state;
    const bk_width = 999;

    return (
      <Fragment>
        Viewport: {width}px x {height}px; breakpoint: {breakpoint} (until{" "}
        {bk_width}px)
      </Fragment>
    );
  }
}

styles = theme => ({});

Viewport.propTypes = {
  classes: PropTypes.object.isRequired
};

Viewport.defaultProps = {};

export default withStyles(styles)(withTheme()(Viewport));
