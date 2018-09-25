import React from "react";
import { Paper, Typography } from "material-ui";

export default ({ locomotive, locomotives, styles }) => {
  console.log("right pane:", locomotive, locomotives);

  var title = "",
    desc = "";
  if (locomotive === "") {
    title = "Welcome!";
    desc = "Please select a locomotive from the list on the left.";
  } else {
    var obj = locomotives.find(function(ex) {
      return ex.id === locomotive;
    });
    if (obj) {
      title = obj.title;
      desc = obj.description;
    }
    console.log(obj, title, desc);
  }

  return (
    <Paper key={locomotive} style={styles.Paper}>
      <Typography variant="display1">{title}</Typography>
      <Typography variant="subheading" style={{ marginTop: 20 }}>
        {desc}
      </Typography>
    </Paper>
  );
};
