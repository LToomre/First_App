import React from "react";
import { Grid } from "material-ui";
import { withStyles } from "@material-ui/core/styles";
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

export default withStyles(styles)(
  ({
    classes,
    editMode,
    locomotive,
    locomotives,
    onDelete,
    onEdit,
    onSelect,
    railroad,
    railroads
  }) => {
    // console.log("Central area:", locomotive, locomotives);
    return (
      <Grid container>
        <Grid item sm>
          <LeftPane
            locomotive={locomotive}
            locomotives={locomotives}
            railroad={railroad}
            railroads={railroads}
            onSelect={onSelect}
            styles={styles}
          />
        </Grid>
        <Grid item sm>
          <RightPane
            locomotive={locomotive}
            locomotives={locomotives}
            styles={styles}
          />
        </Grid>
      </Grid>
    );
  }
);
