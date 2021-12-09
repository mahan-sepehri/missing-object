import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ShowResultContextProvider } from "./context/showResult";
import { DifficultyContextProvider } from "./context/difficultyContext";
import { LivesContextProvider } from "./context/livesContext";

ReactDOM.render(
  <LivesContextProvider>
    <DifficultyContextProvider>
      <ShowResultContextProvider>
        <App />
      </ShowResultContextProvider>
    </DifficultyContextProvider>
  </LivesContextProvider>,
  document.querySelector("#root")
);
