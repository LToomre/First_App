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

function getLocomotivesByRailroads(locomotives, railroads) {
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

export default ({
  locomotive,
  locomotives,
  railroad,
  railroads,
  onSelect,
  styles
}) => {
  // console.log(railroads, railroad);

  var engines = getLocomotivesByRailroads(locomotives, railroads);
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
