import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
    // console.log(obj, title, desc);
  }

  return (
    <Paper key={locomotive} style={styles.Paper}>
      <Typography component="h2" variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography style={{ marginTop: 20 }} gutterBottom>
        {desc}
      </Typography>
    </Paper>
  );
};
