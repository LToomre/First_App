import React, { Component, Fragment } from "react";
import CentralArea from "./CentralArea";
import { Header, Footer } from "./Layouts";
import { railroads, locomotives } from "../store.js";

export default class extends Component {
  state = {
    locomotive: "",
    locomotives,
    railroad: "",
    railroads
  };

  initRailroads(railroads, locomotives) {
    /**
     * This function is used to set the initial state of the global
     * railroads object. It is a combination of the initial railroads
     * list and any railroads referenced in the locomotives object.
     * It also is a unique list by name element.
     */
  }

  handleRailroadSelected = railroad => {
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
    console.log("handleRailroadSelected: railroad ", railroad);
  };

  handleLocomotiveSelected = locomotive => {
    this.setState(prevState => ({
      locomotive: prevState.locomotives.find(function(ex) {
        return ex.id === locomotive;
      }).id
    }));
    console.log("handleLocomotiveSelected: locomotive", locomotive);
  };

  render() {
    const locomotive = this.state.locomotive;
    const railroad = this.state.railroad;

    console.log("selectors:", locomotive, railroad);

    return (
      <Fragment>
        <Header />

        <CentralArea
          locomotive={locomotive}
          locomotives={locomotives}
          railroad={railroad}
          railroads={railroads}
          onSelect={this.handleLocomotiveSelected}
        />

        <Footer
          railroad={railroad}
          railroads={railroads}
          onselect={this.handleRailroadSelected}
        />
      </Fragment>
    );
  }
}
