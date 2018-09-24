import React, { Fragment } from "react";
import { Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

function matchRailroad(railroads, name, abbrev) {
  let ret = false;
  Object.keys(railroads).forEach(key => {
    if (name === railroads[key].name && abbrev === railroads[key].abbrev)
      ret = true;
    return ret;
  });
  // console.log(name, abbrev, ret)
  return ret;
}

export default ({
  locomotive,
  locomotives,
  railroad,
  railroads,
  onSelect,
  styles
}) => {
  // console.log(railroads, railroad);

  return (
    <Paper styles={styles.Paper}>
      {locomotives.sort().map(([group, locomotives]) => {
        // {railroads.sort().map(([group, locomotives]) => {
        const mRailroad = matchRailroad(railroads, group, railroad);

        if (!railroad || mRailroad) {
          return (
            <Fragment>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {locomotives.map(({ id, title }) => (
                  <ListItem button>
                    <ListItemText
                      primary={title}
                      onClick={() => onSelect(id)}
                    />
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
};
