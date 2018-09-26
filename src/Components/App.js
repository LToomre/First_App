import React, { Component, Fragment } from "react";
import CentralArea from "./CentralArea";
import { Header, Footer } from "./Layouts";
import { railroads, locomotives } from "../store.js";

/**
 * This combined React and material-ui app is the first javascript
 * type that Lars Toomre has ever written.  As a result, there has
 * been much learning and progress has been slow at times as one
 * learns, for instance, the details of .find(), .map(), .reduce(),
 * and .filter() functions on array and objects.
 *
 * Notes on known issues to address:
 * - Add a railroad referenced in locomotives if missing
 * - Clean up the name display for appeneded railroads issue.
 * - Add railroads select element to locomotive dialog
 */

export default class extends Component {
  state = {
    locomotive: "",
    locomotives: {},
    railroad: "",
    railroads: {}
  };

  handleRailroadSelect = railroad => {
    let rail;
    if (railroad === "") {
      // Handle the "ALL" case separately from other abbreviations.
      this.setState(prevState => ({
        railroad: ""
      }));
    } else {
      this.setState(prevState => ({
        railroad: prevState.railroads.find(function(ex) {
          return ex.abbrev === railroad;
        }).abbrev
      }));
    }
    console.log("handleRailroadSelect: railroad ", railroad);
  };

  handleLocomotiveSelect = locomotive => {
    this.setState(prevState => ({
      locomotive: prevState.locomotives.find(function(ex) {
        return ex.id === locomotive;
      }).id
    }));
    console.log("handleLocomotiveSelect: locomotive", locomotive);
  };

  handleLocomotiveCreate = locomotive =>
    this.setState(({ locomotives }) => ({
      locomotives: [...locomotives, locomotive]
    }));

  handleExerciseDelete = id =>
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));

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
    const locomotive = this.state.locomotive;
    const railroad = this.state.railroad;
    this.initRailroads(railroads, locomotives);

    console.log("selectors:", locomotive, railroad);

    return (
      <Fragment>
        <Header
          locomotive={locomotive}
          locomotives={locomotives}
          onLocomotiveCreate={this.handleLocomotiveCreate}
        />

        <CentralArea
          locomotive={locomotive}
          locomotives={locomotives}
          railroad={railroad}
          railroads={railroads}
          onSelect={this.handleLocomotiveSelect}
        />

        <Footer
          railroad={railroad}
          railroads={railroads}
          onselect={this.handleRailroadSelect}
        />
      </Fragment>
    );
  }
}
