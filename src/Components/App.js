import React, { Component, Fragment } from "react";
import CentralArea from "./CentralArea";
import { Header, Footer } from "./Layouts";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <CentralArea />
        <Footer />
      </Fragment>
    );
  }
}
