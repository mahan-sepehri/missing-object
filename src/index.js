import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ShowResultContextProvider } from "./context/showResult";
import { DifficultyContextProvider } from "./context/difficultyContext";

ReactDOM.render(
  <DifficultyContextProvider>
    <ShowResultContextProvider>
      <App />
    </ShowResultContextProvider>
  </DifficultyContextProvider>,
  document.querySelector("#root")
);
