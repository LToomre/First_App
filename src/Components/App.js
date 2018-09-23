import React, { Component, Fragment } from "react";
import CentralArea from "./CentralArea";
import { Header, Footer } from "./Layouts";
import { railroads, locomotives } from "../store.js";

export default class extends Component {
  state = {
    locomotives
  };

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

  render() {
    const locomotives = this.getLocomotivesByRailroads();
    return (
      <Fragment>
        <Header />

        <CentralArea locomotives={locomotives} />

        <Footer railroads={railroads} />
      </Fragment>
    );
  }
}
