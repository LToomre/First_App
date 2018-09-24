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

  getLocomotivesByRailroads() {
    return Object.entries(
      this.state.locomotives.reduce((locomotives, locomotive) => {
        const { railroads } = locomotive;

        locomotives[railroads] = locomotives[railroads]
          ? [...locomotives[railroads], locomotive]
          : [locomotive];

        return locomotives;
      }, {})
    );
  }

  handleRailroadSelected = railroad => {
    var x = "";
    this.setState(prevState => ({
      railroad: prevState.railroads.find(function(ex) {
        return ex.abbrev === railroad;
      })
    }));
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
    const locomotives = this.getLocomotivesByRailroads();
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
