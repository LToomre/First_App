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
    this.state = { width: 0, height: 0, bp: "", bp_width: -1 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
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

  updateWindowDimensions() {
    const w = window.innerWidth;
    const bp = this.getBreakpointCode(w);
    const bp_width = this.getBreakpointWidth(w);
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      bp: bp,
      bp_width: bp_width
    });
  }

  getBreakpointCode(width) {
    var code = "xy";
    const breaks = this.getBreakpoints();
    const x = Object.entries(breaks).forEach(([key, value]) => {
      if (code === "xy" && width < value) {
        code = key;
        // console.log(`key = ${key} value = ${value}`);
      }
    });
    // console.log("Breakpoint code: ", width, code, breaks);
    return code;
  }

  getBreakpointWidth(width) {
    var bp_width = -1;
    const breaks = this.getBreakpoints();
    const x = Object.entries(breaks).forEach(([key, value]) => {
      if (bp_width < 0 && width < value) {
        bp_width = value + 1;
        // console.log(`key = ${key} value = ${value}`);
      }
    });
    // console.log("Breakpoint width:", width, bp_width, breaks);
    return bp_width;
  }

  render() {
    const { classes, theme } = this.props;
    const { width, height, bp, bp_width } = this.state;

    var orientation =
      screen.msOrientation ||
      (screen.orientation || screen.mozOrientation || {}).type;

    if (orientation === "landscape-primary") {
      // console.log("In landscape orientation");
    } else if (orientation === "landscape-secondary") {
      console.log("Mmmh... the screen is upside down!");
    } else if (
      orientation === "portrait-secondary" ||
      orientation === "portrait-primary"
    ) {
      console.log(
        "Mmmh... rotate device from portrait to landscape orientation"
      );
    } else if (orientation === undefined) {
      console.log("The orientation API isn't supported in this browser!!");
    }

    return (
      <Fragment>
        Responsive '{bp}': [{width}x{height}] (until {bp_width}px width)
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
