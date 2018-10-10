import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";

let styles;

class Footer extends React.Component {
  render() {
    const { railroads, railroad, onselect } = this.props;
    const index = railroad ? 0 : 0;

    const labels = Object.keys(
      railroads.reduce((labels, record) => {
        labels[record.abbrev] = record.abbrev;
        return labels;
      }, {})
    ).sort();

    const onIndexSelect = (e, index) =>
      onselect(index === 0 ? "" : labels[index - 1]);

    return (
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {labels.map(group => <Tab key={group} label={group} />)}
        </Tabs>
      </Paper>
    );
  }
}

styles = theme => ({});

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

Footer.defaultProps = {};

export default withStyles(styles)(Footer);
