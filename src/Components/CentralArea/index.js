import React from "react";
import { Grid } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 600,
    overflowY: "auto"
  }
};

export default ({ locomotives, railroads }) => (
  <Grid container>
    <Grid item sm>
      <LeftPane locomotives={locomotives} styles={styles} />
    </Grid>
    <Grid item sm>
      <RightPane styles={styles} />
    </Grid>
  </Grid>
);
