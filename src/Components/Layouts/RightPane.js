import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";

let styles;

class RightPane extends React.Component {
  render() {
    const { classes, locomotive, locomotives, styles } = this.props;
    // console.log("right pane:", locomotive, locomotives);

    var title = "",
      desc = "";
    if (locomotive === "") {
      title = "Welcome!";
      desc = "Please select a locomotive from the list on the left.";
    } else {
      var obj = locomotives.find(function(ex) {
        return ex.id === locomotive;
      });
      if (obj) {
        title = obj.title;
        desc = obj.description;
      }
      // console.log(obj, title, desc);
    }

    return (
      <Paper key={locomotive} style={styles.Paper}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }} gutterBottom>
          {desc}
        </Typography>
      </Paper>
    );
  }
}

styles = theme => ({});

RightPane.propTypes = {
  classes: PropTypes.object.isRequired
};

RightPane.defaultProps = {};

export default withStyles(styles)(RightPane);
