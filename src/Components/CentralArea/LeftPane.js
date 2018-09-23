import React, { Fragment } from "react";
import { Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

export default ({ locomotives, styles }) => (
  <Paper style={styles.Paper}>
    {locomotives.map(([group, locomotives]) => (
      <Fragment>
        <Typography variant="headline" style={{ textTransform: "capitalize" }}>
          {group}
        </Typography>
        <List component="ul">
          {locomotives.map(({ title }) => (
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Fragment>
    ))}
  </Paper>
);
