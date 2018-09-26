import React from "react";
import { AppBar, Toolbar, Typography, Button } from "material-ui";
import LocomotiveResponsiveDialog from "../Dialogs/LocomotiveResponsiveDialog";

export default ({ locomotive, locomotives, onLocomotiveCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Steam Locomotives
        </Typography>

        <LocomotiveResponsiveDialog
          locomotive={locomotive}
          locomotives={locomotives}
          onLocomotiveCreate={onLocomotiveCreate}
        />
      </Toolbar>
    </AppBar>
  );
};
