import React, { Component } from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui";

export default ({ railroads, railroad, onselect }) => {
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
        {labels.map(group => <Tab label={group} />)}
      </Tabs>
    </Paper>
  );
};
