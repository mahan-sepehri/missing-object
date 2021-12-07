import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ShowResultContextProvider } from "./context/showResult";

ReactDOM.render(
  <ShowResultContextProvider>
    <App />
  </ShowResultContextProvider>,
  document.querySelector("#root")
);
