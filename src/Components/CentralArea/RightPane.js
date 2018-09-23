import React from "react";
import { Paper, Typography } from "material-ui";

export default ({ styles }) => (
  <Paper style={styles.Paper}>
    <Typography variant="display1">Welcome!</Typography>
    <Typography variant="subheading" style={{ marginTop: 20 }}>
      Please select a locomotive from the list on the left.
    </Typography>
  </Paper>
);
