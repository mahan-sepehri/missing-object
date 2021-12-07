import React, { useState, useContext } from "react";

import "./App.css";
import ObjectContainer from "./components/ObjectContainer";
import ShowResultContext from "./context/showResult";
import ResultModal from "./components/ResultModal";
import StartModal from "./components/StartModal";

const App = () => {
  const { showResult } = useContext(ShowResultContext);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  return (
    <>
      {!gameIsStarted && <StartModal setGameIsStarted={setGameIsStarted} />}
      {showResult && <ResultModal />}
      <ObjectContainer />
    </>
  );
};

export default App;
