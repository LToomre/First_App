import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default class extends Component {
  state = this.getInitState();

  getInitState() {
    const { locomotive, locomotives, railroads } = this.props;

    return locomotive
      ? locomotive
      : {
          title: "",
          description: "",
          railroads: []
        };
  }

  handleChangeSelect(event) {
    if (event) console.log("handleChange:", event);

    //    this.setState({
    //      [name]: value
    //    }
    //    console.log('handleChange:', name, value);
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state
    });
  };

  render() {
    const { title, description, railroads } = this.state,
      { locomotive, locomotives, railroads: rr } = this.props;

    const names = rr
      .map(ex => {
        return ex.name;
      })
      .sort();

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          fullWidth
        />
        <br />
        <FormControl fullWidth>
          <InputLabel htmlFor="railroads">Railroads</InputLabel>
          <Select value={names} onChange={this.handleChange("railroads")}>
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
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
          fullWidth
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
          disabled={!title || !locomotives}
        >
          {locomotive ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}
