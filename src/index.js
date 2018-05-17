import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/index";
//import App from "./Hello.js";
require("./style.css");

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
