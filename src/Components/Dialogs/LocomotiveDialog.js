import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import LocomotiveForm from "./LocomotiveForm";

/**
 * React dialog component for a locomotive entity.
 *
 * This is the first dialog component Lars Toomre wrote for his first
 * React app.  Much of this code is based on the example code found
 * at https://material-ui.com/demos/dialogs/.
 *
 * To further his learning, Lars has enhanced this basic dialog to
 * make it responsive and accessible as much as possible.
 */

let styles;

class LocomotiveDialog extends React.Component {
  state = {
    open: false,
    locomotive: {
      title: "",
      description: "",
      railroads: []
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      locomotive: {
        ...this.state.locomotive,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    // TODO: validate

    const { locomotive } = this.state;

    this.props.onCreate({
      ...locomotive,
      id: locomotive.title.toLocaleLowerCase().replace(/ /g, "-")
    });

    this.setState({
      open: false,
      locomotive: {
        title: "",
        description: "",
        railroads: []
      }
    });
  };

  handleFormSubmit = () => {};

  render() {
    const { fullScreen } = this.props;
    const defaultAction = "Create";
    const { open } = this.state,
      { classes, locomotive, locomotives, railroad, railroads } = this.props;
    console.log("loco dialog:", {
      classes,
      locomotive,
      locomotives,
      railroad,
      railroads,
      fullScreen
    });

    return (
      <Fragment key={"create-locomotive"}>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-label="Responsive "
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create New locomotive
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill in the form below.
            </DialogContentText>
            <LocomotiveForm
              locomotive={locomotive}
              locomotives={locomotives}
              railroads={railroads}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
          <DialogActions>
            <Button
              aria-label="Cancel"
              onClick={this.handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              aria-label={defaultAction}
              onClick={this.handleClose}
              color="primary"
              variant="contained"
            >
              {defaultAction}
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

styles = theme => ({
  FormControl: {
    width: 300
  }
});

LocomotiveDialog.propTypes = {
  classes: PropTypes.object.isRequired,

  onLocomotiveCreate: PropTypes.func.isRequired,

  fullScreen: PropTypes.bool.isRequired
};

LocomotiveDialog.defaultProps = {};

export default withMobileDialog()(withStyles(styles)(LocomotiveDialog));
