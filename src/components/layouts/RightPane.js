import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";

let styles;

class RightPane extends React.Component {
  render() {
    const { classes, selectLocomotive, locomotives, styles } = this.props;
    // console.log("right pane:", locomotive, locomotives);

    var title = "",
      desc = "";
    if (selectLocomotive === "") {
      title = "Welcome!";
      desc = "Please select an item from the list on the left.";
    } else {
      var obj = locomotives.find(function(ex) {
        return ex.id === selectLocomotive;
      });
      if (obj) {
        title = obj.title;
        desc = obj.description;
      }
      // console.log(obj, title, desc);
    }

    // Turn on square corners for rightPane.
    const square = true;

    return (
      <Paper square key={selectLocomotive} className={classes.Paper}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: 5 }} gutterBottom>
          {desc}
        </Typography>
      </Paper>
    );
  }
}

styles = theme => ({
  Paper: {
    padding: 5,
    overflowY: "auto"
  }
});

RightPane.propTypes = {
  classes: PropTypes.object.isRequired
};

RightPane.defaultProps = {};

export default withStyles(styles)(RightPane);
