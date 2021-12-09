import React, { useContext, useState } from "react";

import "./App.css";
import ObjectContainer from "./components/ObjectContainer";
import ShowResultContext from "./context/showResult";
import LivesContext from "./context/livesContext";
import ResultModal from "./components/ResultModal";
import StartModal from "./components/StartModal";

const App = () => {
  const { showResult, hasLost } = useContext(ShowResultContext);
  const { showWrong } = useContext(LivesContext);
  const [gameIsStarted, setGameIsStarted] = useState(false);

  return (
    <>
      {!gameIsStarted ? (
        <StartModal setGameIsStarted={setGameIsStarted} />
      ) : null}
      {showResult && hasLost && <ResultModal msg="You Lost" />}
      {showResult && !hasLost && <ResultModal msg="You Won" />}

      {gameIsStarted && !showResult ? <ObjectContainer /> : null}
      {showWrong && <div className="wrong-overlay"></div>}
    </>
  );
};

export default App;
