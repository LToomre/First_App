import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

let styles;

class CentralPane extends React.Component {
  render() {
    const {
      classes,
      editMode,
      locomotives,
      onDelete,
      onEdit,
      onSelect,
      railroads,
      selectLocomotive,
      selectRailroad
    } = this.props;

    // console.log("classes:", classes);
    // console.log("Central area:", locomotive, locomotives);
    /**
     * The material-ui breakpoints are documented at the following url:
     * https://material-ui.com/layout/breakpoints/. Remember that
     * xs is set at less than 600px, and sm is between 600px and less than 960px.
     */
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2}
          xl={2}
          className={classes.section}
        >
          <LeftPane
            locomotives={locomotives}
            onSelect={onSelect}
            railroads={railroads}
            selectLocomotive={selectLocomotive}
            selectRailroad={selectRailroad}
            styles={styles}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          lg={10}
          xl={10}
          className={classes.section}
        >
          <RightPane
            locomotives={locomotives}
            selectLocomotive={selectLocomotive}
            styles={styles}
          />
        </Grid>
      </Grid>
    );
  }
}

styles = theme => ({
  section: {
    height: "100%",
    paddingTop: 0,
    backgroundColor: "#fff"
  }
});

CentralPane.propTypes = {
  classes: PropTypes.object.isRequired
};

CentralPane.defaultProps = {};

export default withStyles(styles)(CentralPane);
