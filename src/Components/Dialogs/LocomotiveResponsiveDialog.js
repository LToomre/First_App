import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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

import withMobileDialog from "@material-ui/core/withMobileDialog";
import { withStyles } from "@material-ui/core/styles";

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

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

class LocomotiveResponsiveDialog extends Component {
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

  render() {
    const { fullScreen } = this.props;
    const defaultAction = "Create";
    const {
        open,
        locomotive: { title, description, railroads }
      } = this.state,
      { classes, locomotives: categories } = this.props;
    console.log({
      fullScreen,
      title,
      description,
      categories
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
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />
              <TextField
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                className={classes.FormControl}
              />
            </form>
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
              variant="raised"
            >
              {defaultAction}
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }

  extra() {
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select value={muscles} onChange={this.handleChange("muscles")}>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange("description")}
          margin="normal"
          className={classes.FormControl}
        />
      </form>
    );
  }
}

LocomotiveResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(
  withStyles(styles)(LocomotiveResponsiveDialog)
);
