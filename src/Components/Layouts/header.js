import React from "react";
import { AppBar, Toolbar, Typography, Button } from "material-ui";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        LToomre App
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
