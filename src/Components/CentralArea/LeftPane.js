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

function getLocomotivesByRailroads(locomotives) {
  return Object.entries(
    locomotives.reduce((locomotives, locomotive) => {
      const { railroads } = locomotive;

      locomotives[railroads] = locomotives[railroads]
        ? [...locomotives[railroads], locomotive]
        : [locomotive];

      return locomotives;
    }, {})
  );
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

  var engines = getLocomotivesByRailroads(locomotives);
  console.log("left pane:", locomotives, engines);

  return (
    <Paper styles={styles.Paper}>
      {engines.sort().map(([group, locomotives]) => {
        // {railroads.sort().map(([group, locomotives]) => {
        const mRailroad = matchRailroad(railroads, group, railroad);

        if (!railroad || mRailroad) {
          return (
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {locomotives.map(({ id, title }) => (
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
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
