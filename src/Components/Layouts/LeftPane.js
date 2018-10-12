import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

import Viewport from "./Viewport";

let styles;

class LeftPane extends React.Component {
  matchRailroad(railroads, name, abbrev) {
    let ret = false;
    Object.keys(railroads).forEach(key => {
      if (name === railroads[key].name && abbrev === railroads[key].abbrev)
        ret = true;
      return ret;
    });
    // console.log(name, abbrev, ret)
    return ret;
  }

  getLocomotivesByRailroads(locomotives, railroads) {
    const val = Object.entries(
      locomotives.reduce((locomotives, locomotive) => {
        const { railroads } = locomotive;

        locomotives[railroads] = locomotives[railroads]
          ? [...locomotives[railroads], locomotive]
          : [locomotive];

        return locomotives;
      }, {})
    );
    const val2 = railroads.map(ex => {
      const railroad = ex.name;
      const engines = locomotives.filter(ex => {
        const lookup = ex.railroads.indexOf(railroad);
        const found = lookup > -1 ? true : false;
        // if (lookup > -1) console.log('railway lookup:', railroad, ex.railroads, found)
        return found;
      }, {});
      const element = [railroad, engines];
      // console.log('result element', element)
      return element;
    });
    // console.log("getLocomotives", val, val2);
    return val2;
  }

  render() {
    const {
      classes,
      locomotives,
      onSelect,
      railroads,
      selectLocomotive,
      selectRailroad,
      styles
    } = this.props;

    var engines = this.getLocomotivesByRailroads(locomotives, railroads);

    // Turn on square corners for leftPane component.
    const square = true;

    return (
      <Paper square className={classes.Paper}>
        {engines.sort().map(([group, locomotives]) => {
          const mRailroad = this.matchRailroad(
            railroads,
            group,
            selectRailroad
          );

          if (!selectRailroad || mRailroad) {
            return (
              <Fragment key={group}>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {locomotives.map(({ id, title }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText>
                        <Typography variant="subtitle1">{title}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            );
          } else {
            return null;
          }
        })}
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

LeftPane.propTypes = {
  classes: PropTypes.object.isRequired
};

LeftPane.defaultProps = {};

export default withStyles(styles)(LeftPane);
