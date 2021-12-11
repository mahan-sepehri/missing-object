import React, { useContext } from "react";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";
import DifficultyContext from "../context/difficultyContext";
import "./ResultModal.css";

const ResultModal = (props) => {
  const { hasLost, setHasLost, setShowResult } = useContext(ShowResultContext);
  const { setLives } = useContext(LivesContext);
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

  const closeModal = () => {
    if (hasLost) {
      setHasLost(false);
      setLives(3);
      setDifficulty(10);
      props.setGameIsStarted(false);
    }
    setShowResult(false);
  };
  return (
    <div className="overlay">
      <div className="result-modal">
        <h1>{props.msg}</h1>
        {hasLost && <h1>Score = {difficulty}</h1>}
        {hasLost && (
          <button className="play-again-button" onClick={closeModal}>
            Play Again
          </button>
        )}
        {!hasLost && (
          <button className="play-again-button" onClick={closeModal}>
            Next Level
          </button>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
