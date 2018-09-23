import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui";

export default props => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="First" />
      <Tab label="Second" />
      <Tab label="Third" />
    </Tabs>
  </Paper>
);
