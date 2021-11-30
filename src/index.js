import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.less";

function Index() {
  return <App />;
}

render(<Index />, document.getElementById("App"));
