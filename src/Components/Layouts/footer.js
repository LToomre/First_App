import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui";

export default ({ railroads }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="All" />
      {railroads.map(group => <Tab label={group} />)}
    </Tabs>
  </Paper>
);
