import React from "react";
import { AppBar, Toolbar, Typography, Button } from "material-ui";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Locomotive
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
