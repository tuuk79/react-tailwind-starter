import React, { Component } from "react";
import { render } from "react-dom";
import App from "./app";

class Welcome extends Component {
  render() {
    return <App />;
  }
}

render(<Welcome />, document.getElementById("root"));
