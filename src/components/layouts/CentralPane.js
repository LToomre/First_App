import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import Viewport from "./Viewport";

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

    //  Display message if no specific choice(s) made,
    if (!selectLocomotive && !selectRailroad) {
      return (
        <Fragment>
          <Viewport />
          <Typography variant="subtitle1">
            At start-up with no selections yet made.
          </Typography>
          <br />
        </Fragment>
      );
    } else if (selectLocomotive && !selectRailroad) {
      return (
        <Fragment>
          <Viewport />
          <Typography variant="subtitle1">
            Here are details for {selectLocomotive}
          </Typography>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Viewport />

        <Grid container>
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
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
            sm={7}
            md={8}
            lg={9}
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
      </Fragment>
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
