import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.less";

import { ConfigProvider } from "antd";
import en_US from "antd/lib/locale/en_US";

function Index() {
  return (
    <ConfigProvider locale={en_US}>
      <App />
    </ConfigProvider>
  );
}

render(<Index />, document.getElementById("App"));
