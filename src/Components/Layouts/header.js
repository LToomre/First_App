import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import LocomotiveDialog from "../Dialogs/LocomotiveDialog";

export default ({ locomotive, locomotives, railroads, onLocomotiveCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
          Steam Locomotives
        </Typography>

        <LocomotiveDialog
          locomotive={locomotive}
          locomotives={locomotives}
          onLocomotiveCreate={onLocomotiveCreate}
          railroads={railroads}
        />
      </Toolbar>
    </AppBar>
  );
};
