import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";

import Header from "./layouts/HeaderPane";
import CentralPane from "./layouts/CentralPane";
import Footer from "./layouts/FooterPane";
import { railroads, locomotives } from "../assets/data/store.js";

/**
 * This combined React and material-ui app is the first javascript
 * type app that Lars Toomre ever has written.  As a result, there
 * has been much learning and progress has been slow at times, like
 * with, for instance, the details of .find(), .map(), .reduce(),
 * and .filter() functions on arrays and objects.
 *
 * Short reminders for issues that still need to be addressed:
 *
 * - Let each leftPane RR be clickable with icon in front.
 *
 * - Add icon in front of each locomotive for a RR.
 *
 * - Code up the AppBar menu.
 *
 * - Create custom breakpoints for xxs (0 -> 359 px)
 *
 * - Add logic for determining device orientation.
 *
 * - Think about default icons for a RR and/or locomotive.
 * - Tie the RailroadDialog into the FooterPane somehow.  Add a '+'
 *   icon to the footer area like in the header area.
 * - Modify footer area to have select RR component if # of RR is
 *   greater than three.
 */

let styles;

class App extends React.Component {
  state = {
    locomotives,
    railroads,
    selectLocomotive: "",
    selectRailroad: ""
  };

  componentDidMount() {
    this.calculateState(this.props, this.state, state => this.setState(state));
  }

  componentDidUpdate() {
    this.calculateState(this.props, this.state, state => this.setState(state));
  }

  calculateState = (prevProps, prevState, setState) => {
    // Remember that this came from Drupal JS Admin originally
    // /src/components/05_pages/NodeForm/index.js
    const state = {
      ...prevState
    };
    return;
    // setState(state);
  };

  handleRailroadSelect = selectRailroad => {
    if (selectRailroad === "") {
      // Handle the "ALL" case separately from other abbreviations.
      this.setState(prevState => ({
        selectRailroad: ""
      }));
    } else {
      this.setState(prevState => ({
        selectRailroad: prevState.railroads.find(function(ex) {
          return ex.abbrev === selectRailroad;
        }).abbrev
      }));
    }
    console.log("handleRailroadSelect: selectRailroad ", selectRailroad);
  };

  handleLocomotiveSelect = selectLocomotive => {
    this.setState(prevState => ({
      selectLocomotive: prevState.locomotives.find(function(ex) {
        return ex.id === selectLocomotive;
      }).id
    }));
    console.log("handleLocomotiveSelect: selectLocomotive", selectLocomotive);
  };

  handleLocomotiveCreate = locomotive => {
    this.setState(({ locomotives }) => ({
      locomotives: [...locomotives, locomotive]
    }));
  };

  handleExerciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));
  };

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  };

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  };

  initRailroads(railroads, locomotives) {
    /**
     * This function is used to set the initial state of the global
     * railroads object. It is a combination of the initial railroads
     * list and any railroads referenced in the locomotives object.
     * It also is a unique list by name element.
     *
     * Loop through the locomotives array of objects and extract
     * the railroad names from the array of railroads in the object.
     */
    const x = locomotives.map(function(locomotive) {
      const iterateRailroads = locomotive.railroads.values();
      for (const railroad of iterateRailroads) {
        // With railroad name, check if in array of railroad objects
        var found = railroads.find(function(ex) {
          return ex.name === railroad;
        });
        if (!found) {
          // Build abbrev from the railroad name
          var abbrev = "";
          var tokens = railroad.split(/\s/);
          for (var i = 0; i < tokens.length; i++) {
            abbrev += tokens[i].substring(0, 1).toUpperCase();
          }
          // Push the new railroad onto array of objects.
          railroads.push({ abbrev: abbrev, name: railroad });
          // console.log(railroad, found, railroads, x)
        }
      }
    });
    return railroads;
  }

  render() {
    const selectLocomotive = this.state.selectLocomotive;
    const selectRailroad = this.state.selectRailroad;
    this.initRailroads(railroads, locomotives);

    console.log("selectors:", selectLocomotive, selectRailroad);

    return (
      <Fragment>
        <Header
          locomotive={selectLocomotive}
          locomotives={locomotives}
          onLocomotiveCreate={this.handleLocomotiveCreate}
          railroads={railroads}
        />

        <CentralPane
          locomotives={locomotives}
          onSelect={this.handleLocomotiveSelect}
          railroads={railroads}
          selectLocomotive={selectLocomotive}
          selectRailroad={selectRailroad}
        />

        <Footer
          railroad={selectRailroad}
          railroads={railroads}
          onselect={this.handleRailroadSelect}
        />
      </Fragment>
    );
  }
}

/**
 * This is not yet working to set custom breakpoint widths.  Ideally,
 * the first breakpoint will be at 360 pixwls.
 */
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 600,
      lg: 900,
      xl: 1200
    }
  }
});

styles = theme => ({});

App.propTypes = {};

App.defaultProps = {};

export default withStyles(styles)(App);
