import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import HeaderPane from "./HeaderPane";
import FooterPane from "./FooterPane";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 600,
    overflowY: "auto"
  }
};

class CentralPane extends React.Component {
  render() {
    const {
      classes,
      editMode,
      locomotive,
      locomotives,
      onDelete,
      onEdit,
      onSelect,
      railroad,
      railroads
    } = this.props;

    // console.log("Central area:", locomotive, locomotives);
    return (
      <Grid container>
        <Grid item sm>
          <LeftPane
            locomotive={locomotive}
            locomotives={locomotives}
            railroad={railroad}
            railroads={railroads}
            onSelect={onSelect}
            styles={styles}
          />
        </Grid>
        <Grid item sm>
          <RightPane
            locomotive={locomotive}
            locomotives={locomotives}
            styles={styles}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CentralPane);
